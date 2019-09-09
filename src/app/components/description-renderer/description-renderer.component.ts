import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-description-renderer',
  templateUrl: './description-renderer.component.html',
  styleUrls: ['./description-renderer.component.css'],
})
export class DescriptionRendererComponent implements ICellRendererAngularComp  {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}
