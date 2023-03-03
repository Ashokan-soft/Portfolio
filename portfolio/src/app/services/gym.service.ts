import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  url:any

  constructor(private http:HttpClient) { }

  public ValueGive(input:any){

    let url="http://rawgymtest.gtgym.in/Bank/InsertBank"

    return this.http.post(url,input)

  }

  public GetAll(input:any){

    let url="http://rawgymtest.gtgym.in/Bank/GetBankDetails"
    
    return this.http.post(url,input)

  }
}
