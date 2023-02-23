import { Component } from '@angular/core';
import { isInteger, toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { concat, map } from 'rxjs';
var a;
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  // Array---------------
  // resultbox:any;

  output: any
  resultbox: any
  names1: any[] = []

  names: any[] = new Array("ashok", "jai", "nivas", "karVenthan", "vijay")
  number: number[] = new Array(1, 2, -3, 4, 5, 6, 7, 8, 9)
  // constructor(){};
  // ngOnInit(){}
  numlist: any;
  resultTask2: any[] = []
  test: any;


  ans() {
    var test1: any;
    test1 = 1;
    test1 = "rdfgfg";
    this.test = 1;
    this.test = "glh,.gl,hng";
    // array methords-----------------------------------------------

    // concat()----
    // this.names=this.names.concat(this.number)

    // console.log(this.names)

    // every()
    // function ispositive(element:any,index:any,array:any)
    // { 
    //    return element > 0;
    // }

    // var value=this.number.every(ispositive)
    //     console.log(value)



    // for loop--------Task-1----------------------------------------------------
    console.log("square of values----------")
    this.numlist = [1, 2, 3, 4, 5]
    var test = this.numlist.forEach((val: any) => val * val)

    for (var i = 0; i < this.names.length; i++) {

      this.numlist[i] = this.numlist[i] * this.numlist[i]
      // this.resultbox=this.numlist[i]
      console.log(this.numlist[i])
    }


    //task 2====================
    console.log("positive value adding----------")
    //every()
    function ispositive(element: any) {
      return element > 0;
    }
    this.number = [1, -4, 12, 0, -3, 29, -150]
    var value: any[] = this.number.filter(ispositive)
    console.log(value)
    var add = 0

    for (var i = 0; i < value.length; i++) {

      add = add + value[i]
    }
    console.log(add)



    // task 3============================================

    console.log("mean of values-------------")
    var total = [1, 2, 3, 4, 5]

    var sum = total.reduce(function (a, b) { return a + b; });
    console.log("sum : " + sum)

    if (total != null) {
      var mean = sum / total.length
      console.log("Mean : " + mean);

    }

    total.sort()



    // task4==================\
    console.log("Factorial  of given values----------")

    var fact = 5
    var mul = 1
    for (var i = 1; i <= fact; i++) {
      mul = mul * i
    }
    console.log("Factorial : " + mul)


    // TASK-5===================================================
    console.log("more functions  of values----------")

    var Task5_values: number[] = [19, 107, 6, 5, 3, 8, 2]

    function isBigEnough(element: any) {
      return (element >= 10);
    }

    var passed = Task5_values.filter(isBigEnough);
    console.log("Above 10 : " + passed);

    var sorted = Task5_values.sort((a, b) => a - b)

    console.log("Ascending:" + sorted)
    var dece = sorted.reverse();
    console.log("Decending array is : " + dece);
    var big: any;

    var againA = Task5_values.sort()
    console.log(againA)
    for (var i = 0; i < againA.length; i++) {

      big = againA[i]
    }
    console.log("large : " + big)
    console.log("small : " + Task5_values[0])


    // console.log(this.numlist[0])
    // console.log(this.numlist[1])
    // console.log(this.numlist[2])
    // console.log(this.numlist[3])
    // console.log(this.numlist[4])
    // console.log(this.numlist[5])
    // this.resultbox=this.numlist[0]
    // this.resultbox=this.numlist[1]
    // this.resultbox=this.numlist[2]
    // this.resultbox=this.numlist[3]
    // this.resultbox=this.numlist[4]

    // square--------------------
    // function square(element:any,index:any,array:any)
    // {
    //   return element*element
    // }
    // var input:any=[1,2,3,4,5]

    // var result:any=square()


    // For Each ----------------

    var digit

    digit = [7, 8, 943, 2]

    digit.forEach(function (val) {
      console.log(val);
    })

    // IndexOf-------------

    var intte
    intte = [12, 23, 45, 67]

    var re = intte.indexOf(45)
    console.log("INdex is : " + re);

    //JOIN()--------------------

    var store
    store = ["hi", "hello", "vanakam"]

    var joined = store.join(" >> ")
    console.log("joined : " + joined)

    // map()---------------------------------

    var mapi = [3, 5, 2, 8]

    var ansii = mapi.map(Math.sqrt)
    // parseInt(this.ans)
    console.log("Answer of sqrt : " + ansii)

    // push ---------------------------------

    var pushh = [1, 2, 3, 4]
    var ele = pushh.push(5)
    console.log(pushh + " recent push : " + ele)

    // pop------------------------------------

    var popu = [12, 34, 45, 56]
    var ele1 = popu.pop()
    console.log("poped element: " + ele1 + "   current array : " + popu)

    // reduce -------------------------------\

    var RD = [1, 2, 3, 4, 5, 6, 7, 8]

    var AD = RD.reduce(function (a, b) { return (a - b) })

    console.log("reduced values : " + AD)

    // Reverse __________________

    var RV = [1, 2, 3, 4, 56, 7, 8, 1, 22]

    var evalu = RV.reverse()
    console.log("reversed  :  " + evalu)

    // Shift------------------------------

    var shif = [12, 14, 43, 567, 3]

    var remo = shif.shift()
    console.log("shifted element : " + remo + "  current Array  : " + shif)

    // slice ------------------

    var slic = [234, 456, 5423, 14, 6524, 78]

    var sliced = slic.slice(1, 3)

    console.log("silced or mazzaed ! : " + sliced)

    // another methord
    console.log("in console slice : " + slic.slice(1, 4))


    // some ????---------------------------------

    function bigg10(element: any, index: any, array: any) {
      return element >= 10
    }
    var evs = [1, 2, 3, 6, 7, 8]

    var boo = evs.some(bigg10)
    console.log("Above 10 using some gives only true or false  : " + boo)

    // sort ----------------------------********

    var nonsorted = [809, 3, 123, 24253, 21]

    var sortedd = nonsorted.sort((a, b) => a - b)

    console.log(" Asscending order : " + sortedd)


    // splice()------------------------------------

    var contents = [3, 6, 2343, 3241, 34]

    var remoe = contents.splice(3, 7, 2000, 7777, 6666, 4444, 90909)

    console.log(contents)

    console.log(remoe)

    // toString-------------------------------------

    var con = [3, 6, 2343, 3241, 34]
    var sttr = con.toString()
    console.log(sttr)

    //unshift


    var con = [3, 6, 2343, 3241, 34]
    var unshii = con.unshift(333)
    console.log(unshii)

    console.log("unshfited array : " + con)


    // Mean finding_________________

    var meanii = [11, 562, 673, 7864, 75, 466, 7]

    var sorted3 = meanii.sort(function (a, b) { return a - b })
    console.log("sorted : " + sorted3)

    var n = sorted3.length
    var median

    if (n % 2 == 0) {

      n = n / 2


      var maa = (sorted3[n - 1] + sorted3[n]) / 2

      console.log("Mediaan Value : " + maa)

    }
    else {

      var x = n / 2
      median = sorted3[Math.ceil(x)];


      //  x =parseInt( 'x:any' )
      // toInteger(x)
      // parseInt('x')

      //
      //median= sorted3[(x-0.5)]

      console.log(median)
    }


    var datas: any = new Map()

    datas.set('Name', 'Ashok')
    datas.set('Age', '18')
    datas.set('true', 'human')
    datas.set('gender', 'male')

    var agemap = new Map()

    agemap.set("Ashok", 40);
    agemap.set("sonthosh", 44)
    agemap.set("king", 23)

    for (let x of agemap.keys()) {
      console.log("" + x);

      // this.output=x

    }

    for (let x of agemap.values()) {

      console.log("" + x);

    }
    for (let x of datas.entries()) {
      console.log(x[0], x[1]);
    }




    // this.output=datas.get('Name','Age','human','gender')

    // console.log(datas.get('Name','Age','human','gender'))

    // this.output=datas.size

    // set menthord like a map

    var emplist = new Set()
    
    emplist.add("Ashok")
    emplist.add("Shock")
    emplist.add("tainygirl")
    emplist.add("hr")

    console.log(emplist)

    console.log(emplist.size)

    // console.log(emplist.delete("Ashok"))
    
    console.log(emplist)


    console.log(emplist.has("Ashok"))


    var nummlist=new Set()

    nummlist.add(1).add(2).add(3).add(4).add(5).add(6)

    console.log(nummlist)

    for(var z of nummlist){
      console.log(z)
    }

    // using for Each------------
    console.log("chumma or space")

    nummlist.forEach(function(r){console.log(r)})
    
















  }




}
