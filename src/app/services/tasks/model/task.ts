import firebase from 'firebase/compat';
import Timestamp = firebase.firestore.Timestamp;

export class Task {
  public id!: string;
  public content!: string;
  public lastUpdate!: Timestamp;
}
