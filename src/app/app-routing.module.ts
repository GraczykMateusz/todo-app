import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { canActivate, emailVerified } from '@angular/fire/auth-guard';
import { map, pipe } from 'rxjs';

const redirectVerifiedTo = (redirect: any[]): any => pipe(emailVerified, map(emailVerified => !emailVerified || redirect));
const redirectAuthorizedToDashboard = (): any => redirectVerifiedTo(['/dashboard']);

const redirectUnverifiedTo = (redirect: any[]): any => pipe(emailVerified, map(emailVerified => emailVerified || redirect));
const redirectUnauthorizedToLogin = (): any => redirectUnverifiedTo(['/login']);

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent, ...canActivate(redirectAuthorizedToDashboard)},
  {path: 'dashboard', component: MainDashboardComponent, ...canActivate(redirectUnauthorizedToLogin)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
