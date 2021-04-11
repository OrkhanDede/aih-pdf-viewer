import { Component,Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProtocolService,ProtocolFileModel } from '../services/ProtocolServie';


  @Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.sass']

  })
export class ProtocolComponent  implements OnInit {
  pdfSrc=""
  isDownloadable:boolean=true;
  isPrintable:boolean=true;
  constructor(private protocolServie: ProtocolService) {

  }
  ngOnInit(){
     this.protocolServie.getFile().subscribe(data => {
                var urlCreator = window.URL || window.webkitURL;
                var fileUrl=urlCreator.createObjectURL(data);
                this.pdfSrc=fileUrl;
            });
  }
  downloadFile(){
            const a = document.createElement('a')
            a.href = this.pdfSrc
            a.download = 'downloaded.pdf';
            a.click();
            URL.revokeObjectURL(this.pdfSrc);
  }
  printFile(){
    window.open(this.pdfSrc)?.print();
  }
}