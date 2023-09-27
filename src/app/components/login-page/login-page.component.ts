import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Subject, takeUntil } from 'rxjs';

enum Error {
  VERIFY_EMAIL,
  INVALID_EMAIL_OR_PASSWORD,
  SOMETHING_WENT_WRONG,
  TOO_MANY_REQUESTS,
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  loginGroup = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null, [Validators.required, Validators.minLength(6)])
  });
  
  protected readonly Error = Error;
  protected error: Error | null = null;
  
  private readonly _destroyed$ = new Subject();
  
  constructor(private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.loginGroup.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => this.resetError());
  }
  
  ngOnDestroy(): void {
    this._destroyed$.next('');
    this._destroyed$.complete();
  }
  
  signIn(): void {
    if (this.loginGroup.invalid) {
      this.error = Error.INVALID_EMAIL_OR_PASSWORD;
      return;
    }
    const login = this.loginGroup.value.email!;
    const password = this.loginGroup.value.password!;
    this.userService.signIn(login, password)
      .then(() => this.resetError())
      .catch((e) => {
        if (e.toString() === 'Verify your email!') {
          this.error = Error.VERIFY_EMAIL;
        } else if (e.toString().includes('invalid-login-credentials')) {
          this.error = Error.INVALID_EMAIL_OR_PASSWORD;
        } else if (e.toString().includes('too-many-requests')) {
          this.error = Error.TOO_MANY_REQUESTS;
        } else {
          this.error = Error.SOMETHING_WENT_WRONG;
        }
      });
  }
  
  resetError(): void {
    this.error = null;
  }
}
