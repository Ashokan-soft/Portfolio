import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';

@Component({
  selector: 'app-viewgym',
  templateUrl: './viewgym.component.html',
  styleUrls: ['./viewgym.component.scss']
})
export class ViewgymComponent implements OnInit { 
  

    
  view1: any

  viewSubmitted=false

  ngOnInit(): void {}
  constructor(private service: GymService) { }

  AnswerForm:FormGroup=new FormGroup({

    GYM_ID :new FormControl('',[Validators.required,Validators.maxLength(1)] ),

  })
  GetAll() {

    let InputBoxData ={
      "gymId":this.AnswerForm.controls['GYM_ID'].value
    }


    // let ip = {
    //   "gymId": 3
    // }

    this.service.GetAll(InputBoxData).subscribe((getting: any) => {

      this.view1 = getting.bankDetails
      // alert(JSON.stringify(this.view1));
    })
  }



  view() {
    this.viewSubmitted=true

        if(parseInt(this.AnswerForm.controls['GYM_ID'].value)!= null )
        {
        this.GetAll()

         }else{
          alert("!Warning Gym is emplty")
         }

        }
   
}
