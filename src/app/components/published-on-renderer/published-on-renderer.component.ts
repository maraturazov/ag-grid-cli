import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-published-on-renderer',
  templateUrl: './published-on-renderer.component.html',
  styleUrls: ['./published-on-renderer.component.css'],
})
export class PublishedOnRendererComponent implements ICellRendererAngularComp  {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}
