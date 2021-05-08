import { Component,Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProtocolService,ProtocolFileModel } from '../services/ProtocolServie';
  @Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.sass']

  })
export class ProtocolComponent  implements OnInit {
  pdfSrc:any=""
  isDownloadable:boolean=true;
  isPrintable:boolean=true;
  constructor(private protocolServie: ProtocolService) {

  }
  dataURItoUint8Array(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    // var bb = new Blob([ab]);
    return ia;
}
  
  ngOnInit(){
     this.protocolServie.getFile().subscribe((data:any) => {
              let fileUrl='data:application/pdf;base64,'+data.base64;
              let pdfData=this.dataURItoUint8Array(fileUrl);
              this.pdfSrc=pdfData;
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