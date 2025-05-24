import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-company-logo-renderer',
  imports: [],
  templateUrl: './company-logo-renderer.component.html',
  styleUrl: './company-logo-renderer.component.scss'
})
export class CompanyLogoRendererComponent implements ICellRendererAngularComp {
  public value!:string;

  agInit(params: ICellRendererParams) : void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.value = params.value;
    return true;
  }
}
