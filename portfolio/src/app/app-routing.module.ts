import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // { path: '', component: FormComponent, pathMatch: 'full' },
  {path:'form',component:FormComponent},
  {path:'profile',component:ProfileComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
