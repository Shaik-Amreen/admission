import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { AuthGuard } from './auth.guard';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { FormComponent } from './form/form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [

  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: RegistrationComponent },
  { path: "admission", component: FormComponent, canActivate: [AuthGuard] },
  { path: "submittedresponse", component: ResponseComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminviewComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginpageComponent },
  { path: "edit", component: EditdetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
