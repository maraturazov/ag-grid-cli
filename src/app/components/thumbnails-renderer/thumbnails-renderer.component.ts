import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-thumbnails-renderer',
  templateUrl: './thumbnails-renderer.component.html',
  styleUrls: ['./thumbnails-renderer.component.css'],
})
export class ThumbnailsRendererComponent implements ICellRendererAngularComp  {
  params;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}
