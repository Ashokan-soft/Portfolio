import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

constructor(){}

 list = ["test","test1","test"]
 json = [{"name":"Ashok", "city":"CBE"},{"name":"XXX", "city":"TRP"},{"name":"YYY", "city":"SALEM"},{"name":"SSS", "city":"London"}]

  ngOnInit(): void {
    
  }

}
