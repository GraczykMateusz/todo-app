import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { NewTask } from './model/new-task';
import { Task } from './model/task';
import { DocumentData } from '@angular/fire/compat/firestore';
import { OwnDate } from '../days/own-date';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly firestore: Firestore = inject(Firestore);
  private readonly tasksCollection: any = collection(this.firestore, 'tasks');

  addTask(task: NewTask): Promise<any> {
    return addDoc(this.tasksCollection, task.asObject());
  }

  removeTask(id: string): Promise<void> {
    return deleteDoc(doc(this.tasksCollection, id));
  }

  getTasksByDate(ownDate: OwnDate): Observable<Task[]> {
    const queryFn: any = query(this.tasksCollection, where('date', '==', ownDate.date));
    return collectionData(queryFn, {idField: 'id'})
      .pipe(map((tasks: DocumentData[]) => tasks.map((task: DocumentData) => task as Task)));
  }

  toggleCompleteTask(id: string, isCompleted: boolean): Promise<void> {
    return updateDoc(doc(this.tasksCollection, id), {isCompleted: isCompleted});
  }
}
