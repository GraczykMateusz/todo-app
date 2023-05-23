import firebase from 'firebase/compat';
import Timestamp = firebase.firestore.Timestamp;

export interface Task {
  id: string;
  content: string;
  date: Timestamp;
}
