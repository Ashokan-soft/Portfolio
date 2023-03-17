import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

iToggled:boolean=false

show:any 

togglMenu(){}

ChangeButtoncolor(x:any){

   this.show=x
}


}
