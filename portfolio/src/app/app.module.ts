import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RformsComponent } from './rforms/rforms.component';
import { ListViewComponent } from './list-view/list-view.component';
import { RcalculatorComponent } from './rcalculator/rcalculator.component';
import { ViewgymComponent } from './viewgym/viewgym.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertgymComponent } from './insertgym/insertgym.component';
import { TipsComponent } from './tips/tips.component';
import { ScripttipsComponent } from './scripttips/scripttips.component';
import { BetaComponent } from './beta/beta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    LoginComponent,
    RformsComponent,
    ListViewComponent,
    RcalculatorComponent,
    ViewgymComponent,
    InsertgymComponent,
    TipsComponent,
    ScripttipsComponent,
    BetaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [
    { provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
