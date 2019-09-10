import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-tool-panel',
  templateUrl: './tool-panel.component.html',
  styleUrls: ['./tool-panel.component.css'],
})
export class ToolPanelComponent implements IToolPanel {
  params: IToolPanelParams;
  totalRecords = 0;
  selectedRecords = 0;
  constructor() { }

  agInit(params: IToolPanelParams): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
    this.params.api.addEventListener('selectionChanged', this.updatedSelectedRecords.bind(this));
  }

  updateTotals(): void {
    this.totalRecords = this.params.api.getDisplayedRowCount();
    this.selectedRecords = this.params.api.getSelectedRows().length;
  }

  updatedSelectedRecords(): void {
    this.selectedRecords = this.params.api.getSelectedRows().length;
  }

  toggleSelectionMode(): void {
    this.params.api.dispatchEvent({type: 'toggleSelectionMode'});
  }

  refresh(): boolean {
    return false;
  }
}
