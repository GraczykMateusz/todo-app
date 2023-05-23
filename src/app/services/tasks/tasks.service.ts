import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, query, where, Timestamp } from '@angular/fire/firestore';
import { NewTask } from './model/new-task';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly firestore: Firestore = inject(Firestore);
  private readonly tasksCollection = collection(this.firestore, 'tasks');

  addTask(task: NewTask): Promise<any> {
    return addDoc(this.tasksCollection, task.asObject());
  }

  removeTask(id: string): Promise<void> {
    return deleteDoc(doc(this.tasksCollection, id));
  }

  getTasksByDate(date: Date): Observable<Task[]> {
    console.log(Timestamp.fromDate(date))
    const queryFn: any = query(this.tasksCollection, where('date', '==', Timestamp.fromDate(date)));
    return collectionData(queryFn, {idField: 'id'})
      .pipe(map(values => values.map(value => value as Task)));
  }
}
