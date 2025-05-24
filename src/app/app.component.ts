import { Component } from '@angular/core';

import {AgGridAngular} from 'ag-grid-angular';
import {IRow} from './models/i-row';
import {AllCommunityModule, ColDef, GridReadyEvent, ModuleRegistry} from 'ag-grid-community';
import {HttpClient} from '@angular/common/http';

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
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" }
  ];

  constructor(private http:HttpClient) {
  }

  onGridReady(params:GridReadyEvent) {

    this.http.get<any[]>('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .subscribe(data => this.rowData = data)
  }
}
