import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.firestore.collection('collection-name').doc('document-id').set({
      field1: 'new-value1',
      field2: 'new-value2'
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }
}
