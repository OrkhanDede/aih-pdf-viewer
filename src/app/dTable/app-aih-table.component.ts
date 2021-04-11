import { Component, OnInit, Input   } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

enum ColumnType{
  text,
  number,
  date,
  select
}

@Component({
    selector: 'app-aih-table',
    templateUrl: './app-aih-table.component.html',
  })

  export class AihTable {
    editing:any= [];
    ColumnMode = ColumnMode;
    SelectionType = SelectionType;
    selected: any[] = [];
    rows:Array<any> =  [
      { name: 'Austin', gender: 'Male', age:8 },
      { name: 'Dany', gender: 'Male', age: 5 },
      { name: 'Molly', gender: 'Female', age:4 }
    ];
    columns: any[] = [{ name: 'Namee',prop:'Ad' }, { name: 'Genderr' }, { name: 'Agee' }];
    // Columns=["Namee","Genderr","Agee"]
   
    dbClickEdit(cell:string,rowIndex:number){
      console.log("🚀 ~ file: app-aih-table.component.ts ~ line 23 ~ AihTable ~ dbClickEdit ~ rowIndex", rowIndex)
      console.log("🚀 ~ file: app-aih-table.component.ts ~ line 23 ~ AihTable ~ dbClickEdit ~ cell", cell)
    }
    onSelect(event:any,cell:any,rowIndex:any) {
      this.editing[rowIndex + '-' + cell] = true;
      console.log('Event: select', event, this.selected);
    }
    onActivate(event:any) {
      console.log('Event: activate', event);
    }
    pressEnter(event:any,cell:any,rowIndex:any){
      console.log(this.selected);
      console.log("press enter");
    }
    updateValue(event:any, cell:any, rowIndex:any) {
      console.log('inline editing rowIndex', rowIndex);
      this.editing[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = [...this.rows];
      console.log('UPDATED!', this.rows[rowIndex][cell]);
    }
  }