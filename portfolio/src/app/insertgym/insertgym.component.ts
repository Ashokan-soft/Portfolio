import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GymService } from '../services/gym.service';

@Component({
  selector: 'app-insertgym',
  templateUrl: './insertgym.component.html',
  styleUrls: ['./insertgym.component.scss']
})
export class InsertgymComponent implements OnInit {

  submitted: boolean = false
  
  types = ["Current", "Savings"]

  FormPost: FormGroup = new FormGroup({

    gym_Id: new FormControl('', [Validators.required]),
    Bank_Id: new FormControl('',[Validators.required]),
    AccountNO: new FormControl('',[Validators.required]),
    IFSC: new FormControl('',[Validators.required]),
    BankName: new FormControl('',[Validators.required]),
    Branch: new FormControl('',[Validators.required]),
    Type: new FormControl('',[Validators.required]),
    Credit: new FormControl('',[Validators.required]),



  })


  

  constructor(private service: GymService) { }


  AddAccount() {

    this.submitted = true

    if(this.FormPost.valid){

      let newdata = {
  
        "gymId": parseInt(this.FormPost.controls['gym_Id'].value),
        "bankId": parseInt(this.FormPost.controls['Bank_Id'].value),
        "accountNo": parseInt(this.FormPost.controls['AccountNO'].value),
  
        "bankName": this.FormPost.controls['BankName'].value,
  
        "ifscCode": this.FormPost.controls['IFSC'].value,
        "branch": this.FormPost.controls['Branch'].value,
        "accountType": this.FormPost.controls['Type'].value,
        "createdBy": this.FormPost.controls['Credit'].value,
      }

      alert(JSON.stringify(newdata))
  
      this.service.ValueGive(newdata).subscribe((Response: any) => {
  
        alert(JSON.stringify(Response))
        //this.GetAll();
  
      })
    }
    else{
      alert("Warning !!! Form Invalid")
    }
  }

  // ------------------------p===============================





  ngOnInit(): void {

    //this.GetAll();

  }
  keyPressNumbers(event: any) {
    // alert(JSON.stringify(event.keyCode))
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

 


  TypeSelect(b: any) {

    if (b.target.value) {

      this.FormPost.controls['Type'].setValue(b.target.value);
      // or use this methord
      // this.rform.controls['Type'].setValue(b.target.value )

      // console.log(this.rform.controls['Type'].value)

      console.log(this.FormPost.controls['Type'])
    }
    else {
      console.log("Nothing selected")
    }

  }



  
}