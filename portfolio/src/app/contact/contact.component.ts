import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email:any="ashokansoft@gmail.com"
  password:any="Ashok"
  
  Submitted:boolean=false

  push() { 
    this.Submitted=true
    if(this.email == this.form2.controls['email'].value && this.password == this.form2.controls['password'].value){
      alert("login success buddy")
      console.log(""+this.form2.controls['email'].value+""+this.form2.controls['password'].value)
    }
    else{
      alert("email or password wrong")
      console.log(""+this.form2.controls['email'].value+""+this.form2.controls['password'].value)

    }
  }

  ngOnInit(): void {

  }


  form2: FormGroup = new FormGroup({

    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required])
    

  })

}
