import {inject, Injectable} from '@angular/core';
import {NgbSlideEventDirection} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject} from 'rxjs';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {NewTask} from './model/new-task';
import {mapToObject} from '@angular/fire/compat/remote-config';
// import {collection, collectionData, Firestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly firestore: Firestore = inject(Firestore);
  private readonly tasksCollection = collection(this.firestore, 'tasks');

  private readonly taskToRemove = new BehaviorSubject<number>(-1);

  constructor() {
  }

  refreshTasks(direction: NgbSlideEventDirection) {

  }

  addTask(task: NewTask) {
    return addDoc(this.tasksCollection, task.asObject());
  }

  removeTask(id: number): void {
    // addDoc(this.tasksCollection, {"xd": "xd"}).then(() => console.log("hahhaha"))

    this.taskToRemove.next(id);
  }

  getTaskToRemove() {
    return this.taskToRemove.asObservable();
  }

  getTasks() {
    return collectionData(this.tasksCollection);
  }
}
