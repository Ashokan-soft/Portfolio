import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BetaComponent } from './beta/beta.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { InsertgymComponent } from './insertgym/insertgym.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RcalculatorComponent } from './rcalculator/rcalculator.component';
import { RformsComponent } from './rforms/rforms.component';
import { ScripttipsComponent } from './scripttips/scripttips.component';
import { TipsComponent } from './tips/tips.component';
import { ViewgymComponent } from './viewgym/viewgym.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path:'form',component:FormComponent},
  {path:'profile',component:ProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'works',component:WorksComponent},
  {path:'login',component:LoginComponent},
  {path:'listview',component:ListViewComponent},
  {path:'rforms',component:RformsComponent},
  {path:'Rcalculator',component:RcalculatorComponent},
  {path:'viewgym',component:ViewgymComponent},
  {path:'insertgym',component:InsertgymComponent},
  {path:'tips',component:TipsComponent},
  {path:'scripttips',component:ScripttipsComponent},
  {path:'beta',component:BetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
