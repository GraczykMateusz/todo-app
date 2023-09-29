import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { NewTask } from './model/new-task';
import { Task } from './model/task';
import { OwnDate } from '../days/own-date';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  private readonly userService: UserService = inject(UserService);
  private readonly firestore: Firestore = inject(Firestore);
  private readonly tasksCollection: any = collection(this.firestore, 'tasks');
  
  addTask(task: NewTask): Promise<any> {
    return addDoc(this.tasksCollection, task.asObject());
  }
  
  updateTaskContent(task: Task): Promise<any> {
    return updateDoc(doc(this.tasksCollection, task.id), {content: task.content});
  }
  
  removeTask(id: string): Promise<void> {
    return deleteDoc(doc(this.tasksCollection, id));
  }
  
  getTasksByDate(ownDate: OwnDate): Observable<Task[]> {
    const queryFn: any = query(
      this.tasksCollection,
      where('date', '==', ownDate.date),
      where('user', '==', this.userService.getUser())
    );
    return collectionData(queryFn, {idField: 'id'})
      .pipe(map(tasks => tasks.map(task => task as Task)));
  }
  
  toggleCompleteTask(id: string, isCompleted: boolean): Promise<void> {
    return updateDoc(doc(this.tasksCollection, id), {isCompleted: isCompleted});
  }
}
