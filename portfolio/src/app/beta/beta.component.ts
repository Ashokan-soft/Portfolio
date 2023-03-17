import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/BetaScript.js';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit{
  
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); 
    
   

  }

}
