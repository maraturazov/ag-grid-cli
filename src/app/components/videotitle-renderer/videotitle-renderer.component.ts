import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-videotitle-renderer',
  templateUrl: './videotitle-renderer.component.html',
  styleUrls: ['./videotitle-renderer.component.css'],
})
export class VideotitleRendererComponent implements ICellRendererAngularComp  {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}
