import {Component, signal} from '@angular/core';
import type {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-mission-result-renderer',
  imports: [],
  templateUrl: './mission-result-renderer.component.html',
  styleUrl: './mission-result-renderer.component.scss'
})
export class MissionResultRendererComponent implements ICellRendererAngularComp {
  value = signal('');

  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.value.set(params.value ? 'tick-in-circle' : 'cross-in-circle');
    return true;
  }
}
