import { Component } from '@angular/core';

@Component({
  selector: 'app-rcalculator',
  templateUrl: './rcalculator.component.html',
  styleUrls: ['./rcalculator.component.scss']
})
export class RcalculatorComponent {

  firstnum: any = ''
  secnum: any = ''

  opClicked: boolean = false;

  afterClicked: any = ''

  Result: any = ''

  output: any = ''
  







  push(num: any) {

    if (this.opClicked) {
      this.secnum = this.secnum + num;
      this.output += num;
      console.log("second  :  " + this.secnum)
    }
    else {
      this.firstnum = this.firstnum + num;
      this.output += num;
      console.log("first  :  " + this.firstnum)
    }
  }

  op(op: any) {
    this.opClicked = true;
    this.afterClicked = op;
    this.output += this.afterClicked

    console.log(op)


  }
  // Equals() {

  //   switch (this.afterClicked) {

  //     case '+':
  //       this.Result = parseInt(this.firstnum) + parseInt(this.secnum);
  //       console.log("Result  : " + this.Result)
  //       this.output = this.Result
  //       break;
  //     case '-':
  //       this.Result = parseInt(this.firstnum) - parseInt(this.secnum);
  //       console.log("Result   : " + this.Result)
  //       this.output = this.Result
  //       break;
  //     case '*':
  //       this.Result = parseInt(this.firstnum) * parseInt(this.secnum);
  //       console.log("Result   : " + this.Result)
  //       this.output = this.Result
  //       break;
  //     case '/':
  //       this.Result = parseInt(this.firstnum) / parseInt(this.secnum);
  //       console.log("Result   : " + this.Result)
  //       this.output = this.Result
  //       break;
  //     case '%':
  //       this.Result = parseInt(this.firstnum) % parseInt(this.secnum);
  //       console.log("Result   : " + this.Result)
  //       this.output = this.Result
  //       break;


  //     default:
  //       console.log("Some Thing Error")
  //       this.output = this.Result
  //       break;
  //   }
  // }

  clear() {

    this.firstnum = ''
    this.secnum = ''

    this.opClicked = false;

    this.afterClicked = ''

    this.Result = ''

    this.output = ''

    console.log("Cleared")

    this.output = ""

  }

  Equals() {

    if (this.afterClicked == '+') {
      this.Result = parseInt(this.firstnum) + parseInt(this.secnum)

      console.log("If method : " + this.Result)
      //this.output = this.Result
    }
    if(this.afterClicked == "-")
    {
      this.Result=parseInt(this.firstnum)-parseInt(this.secnum)
      //this.output = this.Result

    }
    if (this.afterClicked == '*') {
      this.Result = parseInt(this.firstnum) * parseInt(this.secnum)

      console.log("If method : " + this.Result)
      //this.output = this.Result
    }
    if (this.afterClicked == '/') {
      this.Result = parseInt(this.firstnum) / parseInt(this.secnum)

      console.log("If method : " + this.Result)
      ////this.output = this.Result
    }
    if (this.afterClicked == '%') {
      this.Result = parseInt(this.firstnum) % parseInt(this.secnum)

      console.log("If method : " + this.Result)
      //this.output = this.Result
    }
    else if(this.afterClicked =='')
    {
      console.log("some thing error dude..")
      //this.output = this.Result
    }
    this.secnum = '';
    this.firstnum = this.Result;
    this.opClicked = false;


  }

}
