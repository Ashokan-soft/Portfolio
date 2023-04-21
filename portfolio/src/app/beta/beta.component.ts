import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';
import { HttpClient } from '@angular/common/http';
import { BetaService } from '../services/beta.service';

const SCRIPT_PATH = '/assets/BetaScript.js';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit{
  
  Lst:any=" downloadPdf() { const pdfUrl = './assets/sample.pdf'; const pdfName = 'your_pdf_file'; FileSaver.saveAs(pdfUrl, pdfName);}"
  htmlString  = " <h4>Copy this : </h4><br> <p>  downloadPdf() { <br>    const pdfUrl = './assets/sample.pdf';<br>    const pdfName = 'your_pdf_file';<br>    FileSaver.saveAs(pdfUrl, pdfName);<br>    }<br></p>"

  x:any=[1,2,3,4,5,6786]
  
   arra:any[]=['a','b','c','d']

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
    private service:BetaService,
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); 
   
    this.getBeta()

   

  }
  apitest:any
  getBeta(){
    this.service.getBeta().subscribe((values:any)=>{
      this.apitest=values.entries
      alert(JSON.stringify(this.apitest))
    })
  }


}
