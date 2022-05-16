import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [

  { path: "", redirectTo: "/admission", pathMatch: "full" },
  { path: "admission", component: FormComponent },
  { path: "admin", component: AdminviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
