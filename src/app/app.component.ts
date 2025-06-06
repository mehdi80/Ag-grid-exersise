import { Component } from '@angular/core';

import {AgGridAngular} from 'ag-grid-angular';
import {IRow} from './models/i-row';
import {
  AllCommunityModule,
  CellChangedEvent, CellValueChangedEvent,
  ColDef,
  GridReadyEvent,
  ModuleRegistry,
  ValueFormatterParams
} from 'ag-grid-community';
import {HttpClient} from '@angular/common/http';
import {CompanyLogoRendererComponent} from './components/company-logo-renderer/company-logo-renderer.component';

ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-root',
  imports: [ AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ag-grid-exercise';
  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    { field: "mission"},
    { field: "company",
      cellRenderer: CompanyLogoRendererComponent
    },
    { field: "location" },
    { field: "date" },
    { field: "price" ,
      valueFormatter: (params:ValueFormatterParams) =>{
      return "$" + params.value.toLocaleString();
      }
    },
    { field: "successful" },
    { field: "rocket" },
  ];

  defaultColDef: ColDef = {
    filter: true,
    editable:true
  }

  constructor(private http:HttpClient) {}

  onGridReady(params:GridReadyEvent) {

    this.http.get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .subscribe(data => this.rowData = data)
  }

  onCellValueChanged(event:CellValueChangedEvent) {
    console.log(event.value);
  }
}
