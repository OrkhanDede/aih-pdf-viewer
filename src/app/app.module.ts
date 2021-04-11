import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {AihTable} from './dTable/app-aih-table.component'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {PdfViewerComponent} from './pdf-viewer/app-pdf-viewer.component'
import {ProtocolComponent} from './protocol/protocol.component'
import {PdfUploaderComponent} from './pdf-uploader/pdf-uploader.component'

import { ProtocolService } from './services/ProtocolServie';

@NgModule({
  declarations: [
    AppComponent,
   
    AihTable,
    PdfViewerComponent,
    PdfUploaderComponent,
    ProtocolComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxDatatableModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [ProtocolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
