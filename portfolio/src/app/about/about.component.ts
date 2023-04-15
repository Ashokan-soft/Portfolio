import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/About.js';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


x:any='90%'
  
    
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); 
    
   

  }
}
