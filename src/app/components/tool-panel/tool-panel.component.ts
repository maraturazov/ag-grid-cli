import { Component } from '@angular/core';
import {IToolPanel, IToolPanelParams} from 'ag-grid-community';
@Component({
  selector: 'app-tool-panel',
  templateUrl: './tool-panel.component.html',
  styleUrls: ['./tool-panel.component.css'],
})
export class ToolPanelComponent implements IToolPanel {
  params: IToolPanelParams;
  showCheckbox = false;
  constructor() { }

  agInit(params: IToolPanelParams): void {

  }

  toggleSelectionMode() {

  }

  refresh(): boolean {
    return false;
  }
}
