import { inject, Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
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
  
  getTasksByDate(ownDate: OwnDate): Observable<Task[]> {
    const queryFn: any = query(
      this.tasksCollection,
      where('date', '==', ownDate.date),
      where('user', '==', this.userService.getUser())
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
}
