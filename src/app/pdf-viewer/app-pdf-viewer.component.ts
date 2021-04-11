import { Component, OnInit, Input,Output, EventEmitter   } from '@angular/core';

const ZOOM_TOP_LIMIT=5;//500%
const ZOOM_STEP:number = 0.25;//25$
const DEFAULT_ZOOM:number = 1;//100%
@Component({
    selector:"app-pdf-viewer",
    templateUrl:'./app-pdf-viewer.component.html',
    styleUrls: ['./app-pdf-viewer.component.sass']
})
export class PdfViewerComponent implements OnInit {
    @Input() pdfSrc: any;
    @Input() isDownloadable:boolean=false;
    @Input() isPrintable:boolean=false;

    @Output() onClickDownloadBtn = new EventEmitter<boolean>();
    @Output() onClickPrintBtn = new EventEmitter<boolean>();
    

   
    pdfZoom:number = DEFAULT_ZOOM;
    page: number = 1;
    totalPages: number=1;
    isLoaded: boolean = false;
    pageZoomPercentText:string=this.getPageZoomWithPercentage();
    pageNumberText:number=1;

    ngOnInit(){
    }
    afterLoadComplete(pdfData: any) {
        console.log("after looooadd");
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
      }
    downloadFile(e:any){
        if(this.isDownloadable){
            this.onClickDownloadBtn.emit(true);
        }
    }
    
    printFile(e:any){
        if(this.isPrintable){
            this.onClickPrintBtn.emit(true);
        }
    }
    pagechanging(e:any){
        console.log("pagechanginggggggg");
        this.pageNumberText = e.pageNumber; 
    }
    pageInputChange(e:any){
        let pNumber=e.target.value;
        console.log(pNumber);
        if(pNumber>this.totalPages){
            this.page=this.totalPages;
            this.pageNumberText=this.totalPages;
            return;
        }else if(pNumber<=0) {
            this.page=1;
            this.pageNumberText=1;
            return;
        }
        this.page=pNumber;
    }
    pageZoomPercentTextChange(e:any){
        let value=parseInt(e.target.value);
        if(value<=ZOOM_STEP*100) value=ZOOM_STEP*100;
        else if(value>=ZOOM_TOP_LIMIT*100) value=ZOOM_TOP_LIMIT*100;
        this.pdfZoom=value/100;
        this.pageZoomPercentText=this.getPageZoomWithPercentage();
    }
    zoomIn()
	{
        if(this.pdfZoom>=ZOOM_TOP_LIMIT)return;
		this.pdfZoom += ZOOM_STEP;
        this.pageZoomPercentText=this.getPageZoomWithPercentage();
	}
	zoomOut()
	{
        if(this.pdfZoom<=ZOOM_STEP)return;
        this.pdfZoom -= ZOOM_STEP;
        this.pageZoomPercentText=this.getPageZoomWithPercentage();
	}
    resetZoom()
	{
		this.pdfZoom = DEFAULT_ZOOM;
        this.pageZoomPercentText=this.getPageZoomWithPercentage();
	}
    private getPageZoomWithPercentage(){
        return `${this.pdfZoom*100}%`;
    }

}