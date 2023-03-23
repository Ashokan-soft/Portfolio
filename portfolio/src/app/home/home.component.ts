
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/script.js';

// const FileSaver = require('file-saver');
// basic.component.ts
// import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




downloadPdf() {
  const pdfUrl ='/assets/pdf/Ashokan S_CV_N-7.pdf';
  const pdfName = 'Ashok.pdf';
  FileSaver.saveAs(pdfUrl, pdfName);
}



  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);  
  }
    
  }

  


