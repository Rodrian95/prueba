import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from "../app/registration/registration.component";
import { LoginComponent } from '../app/login/login.component';
import { StartComponent } from '../app/start/start.component';
import { AuthGuardService as Auth } from '../app/services/auth-guard.service';

const routes: Routes = [
{path: 'registration', component:RegistrationComponent},
{path: '', component:LoginComponent},
{path: 'start', component:StartComponent, canActivate: [Auth] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
