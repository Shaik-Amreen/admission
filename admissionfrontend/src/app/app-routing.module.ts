import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { FormComponent } from './form/form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [

  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: RegistrationComponent },
  { path: "admission", component: FormComponent },
  { path: "submittedresponse", component: ResponseComponent },
  { path: "admin", component: AdminviewComponent },
  { path: "login", component: LoginpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
