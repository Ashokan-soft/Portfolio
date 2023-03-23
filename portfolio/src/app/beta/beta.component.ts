import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/BetaScript.js';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit{
  
  Lst:any=" downloadPdf() { const pdfUrl = './assets/sample.pdf'; const pdfName = 'your_pdf_file'; FileSaver.saveAs(pdfUrl, pdfName);}"
  htmlString  = " <h4>Copy this : </h4><br> <p>  downloadPdf() { <br>    const pdfUrl = './assets/sample.pdf';<br>    const pdfName = 'your_pdf_file';<br>    FileSaver.saveAs(pdfUrl, pdfName);<br>    }<br></p>"
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); 
    
   

  }



}
