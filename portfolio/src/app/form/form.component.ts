import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  FName:any
  LName:any
  age:any
  gender:any
  department:any
  work:any
  email:any
  phoneNumber:any
  password:any
  ConfrimPass:any
  successresult:any

  submit(){

    if(this.FName,this.LName,this.age,this.gender,this.department,this.email,
      this.phoneNumber,this.password,this.ConfrimPass!=null){
        
        console.log("Form Submitted")
        this.successresult="submitted successfully"

        console.log("FirstNAME:"+this.FName)
        console.log("LastNAME:"+this.LName)
        console.log("Age:"+this.age)
        console.log("Gender :"+this.gender)
        console.log("Depart :"+this.department)
        console.log("Working locations user wish:"+this.work)

        console.log("PH :"+this.phoneNumber)
        console.log("Pass : "+this.password)
        console.log("Cpass :"+this.ConfrimPass)
        // console.log(""+this.successresult)
        alert("User Datas"+this.FName+ "Last Name : "+this.LName+"Age : "+this.age+"gender : "+this.gender+"department :"+
        this.department+"Work"+this.work+"PhoneNumber : "+this.phoneNumber+"Password :"+this.password+"CPass"+this.ConfrimPass)
       
        

  }
  else{
    alert("hoo!! Sorry!!! Some Fields Are Empty")
  }
}

}
