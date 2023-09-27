import { Injectable } from '@angular/core';
import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private afApp: FirebaseApp,
              private router: Router) {
  }
  
  async signIn(email: string, password: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      await signInWithEmailAndPassword(getAuth(this.afApp), email, password)
        .then(user => {
          if (!user.user.emailVerified) {
            sendEmailVerification(user.user)
              .then(() => reject('Verify your email!'))
              .catch(e => reject(e));
          } else {
            this.router.navigate(['/dashboard'])
              .then(() => resolve());
          }
        })
        .catch(e => reject(e));
    });
  }
  
  getUser(): string {
    return getAuth(this.afApp).currentUser!.email!;
  }
}
