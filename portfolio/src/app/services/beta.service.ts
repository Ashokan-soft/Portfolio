import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetaService {

  constructor(private http:HttpClient) { }

  public getBeta(){
    let url ="https://api.publicapis.org/entries"
    return this.http.get(url)
  }
}
