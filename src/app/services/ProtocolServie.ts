import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ProtocolService  {
  constructor(private http: HttpClient) {
  }
  public getFile(){
    return this.http.get("https://localhost:44379/api/Protocols",{ responseType: 'blob' });
  }
}

export interface ProtocolFileModel{
  File:Blob,
  IsDownloadable:boolean,
  IsPrintable:boolean,
  FileName:string
}