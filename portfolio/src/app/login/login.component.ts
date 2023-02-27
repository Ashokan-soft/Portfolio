import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  un:string = "Ashok"
  pwd:string = "Ashok"
  submitted:boolean = false;

  constructor(private router: Router)
  {
    
  }

  form1:FormGroup = new FormGroup({
    email : new FormControl('',Validators.email),
    password : new FormControl('',[Validators.required,Validators.pattern("^a-zA-Z$")])
  })
  
  ngOnInit(): void {
    
  }
  Reg()
  {
    this.submitted = true;
    alert(JSON.stringify(this.form1.value))
    //this.submitted = false;
    if(this.form1.controls['email'].value == this.un && this.form1.controls['password'].value == this.pwd)
    {
      this.router.navigate(['/','rforms'])
    }
    else
    {
      alert("wrong password")
    }
  }

}
