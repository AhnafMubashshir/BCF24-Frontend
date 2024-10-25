// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { AuthComponent } from './components/auth/auth.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'verify-otp',component:VerifyOtpComponent},
  {path:'set-password',component:SetPasswordComponent},
  {path:'auth',component:AuthComponent},
  {path:'trains',component:TrainListComponent},
  { path: 'train/:id', component: TrainDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
