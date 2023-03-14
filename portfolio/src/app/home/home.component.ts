
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/script.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);  
  }
    
  }

  


