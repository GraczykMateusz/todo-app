import { inject, Injectable } from '@angular/core';
import { map, Observable, of, Subject, take } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { NewTask } from './model/new-task';
import { Task } from './model/task';
import { OwnDate } from '../days/own-date';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  public readonly TASK_TO_DELETE_KEY: string = 'TASK_TO_DELETE_KEY';
  
  private readonly userService: UserService = inject(UserService);
  private readonly firestore: Firestore = inject(Firestore);
  private readonly tasksCollection: any = collection(this.firestore, 'tasks');
  
  private readonly showUndo: Subject<boolean> = new Subject<boolean>();
  
  addTask(task: NewTask): Observable<any> {
    return of(addDoc(this.tasksCollection, task.asObject()));
  }
  
  updateTaskContent(task: Task): Promise<any> {
    return updateDoc(doc(this.tasksCollection, task.id), {content: task.content});
  }
  
  async deleteTask(task: Task): Promise<void> {
    const taskToDeleteObj: string = JSON.stringify(Object.assign({}, task));
    localStorage.setItem(this.TASK_TO_DELETE_KEY, taskToDeleteObj);
    this.hideUndoComponent();
    await deleteDoc(doc(this.tasksCollection, task.id));
    return this.showUndoComponent();
  }
  
  async undoTaskDeletion(): Promise<any> {
    const taskToRollback = JSON.parse(localStorage.getItem(this.TASK_TO_DELETE_KEY)!);
    await addDoc(this.tasksCollection, taskToRollback);
    return this.hideUndoComponent();
  }
  
  moveTasksByDateAndCleanDbRubbish(): void {
    this.getTasksForUser()
      .pipe(take(1))
      .subscribe((tasks: Task[]) => {
        this.movePreviousUndoneTasksToCurrentDay(tasks);
        this.cleanDbRubbishTasks(tasks);
      });
  }
  
  movePreviousUndoneTasksToCurrentDay(tasks: Task[]): void {
    tasks
      .filter((task: Task) => !task.isCompleted)
      .filter((task: Task) => OwnDate.compare(OwnDate.fromString(task.date), OwnDate.today()))
      .forEach((task: Task): void => {
        this.makeTaskOverdue(task)
          .catch((err) => console.error(err));
      });
  }
  
  cleanDbRubbishTasks(tasks: Task[]): void {
    tasks
      .filter((task: Task) => task.isCompleted)
      .filter((task: Task) => OwnDate.compare(OwnDate.fromString(task.date), OwnDate.today()))
      .forEach((task: Task): void  => {
        deleteDoc(doc(this.tasksCollection, task.id))
          .catch((err) => console.error(err));
      });
  }
  
  getTasksForUser(): Observable<Task[]> {
    const queryFn: any = query(
      this.tasksCollection,
      where('user', '==', this.userService.getUser())
    );
    return collectionData(queryFn, {idField: 'id'})
      .pipe(map((tasks: any) => tasks.map((task: any) => task as Task)));
  }
  
  getTasksByDateForCurrentUser(ownDate: OwnDate): Observable<Task[]> {
    const queryFn: any = query(
      this.tasksCollection,
      where('date', '==', ownDate.date),
      where('user', '==', this.userService.getUser()),
      orderBy('content')
    );
    return collectionData(queryFn, {idField: 'id'})
      .pipe(map((tasks: any) => tasks.map((task: any) => task as Task)));
  }
  
  toggleCompleteTask(id: string, isCompleted: boolean): Promise<void> {
    return updateDoc(doc(this.tasksCollection, id), {isCompleted: isCompleted});
  }
  
  getShowUndoAsObservable(): Observable<boolean> {
    return this.showUndo.asObservable();
  }
  
  hideUndoComponent(): void {
    this.showUndo.next(false);
  }
  
  showUndoComponent(): void {
    this.showUndo.next(true);
  }
  
  makeTaskOverdue(task: Task): Promise<void> {
    task.content = task.content.includes('(Overdue) - ') ? task.content : '(Overdue) - ' + task.content;
    return updateDoc(doc(this.tasksCollection, task.id), {
      content: task.content,
      date: OwnDate.today().date
    });
  }
}
