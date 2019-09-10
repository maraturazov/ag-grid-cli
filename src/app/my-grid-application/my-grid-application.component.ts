import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { DescriptionRendererComponent } from '../components/description-renderer/description-renderer.component';
import { PublishedOnRendererComponent } from '../components/published-on-renderer/published-on-renderer.component';
import { ThumbnailsRendererComponent } from '../components/thumbnails-renderer/thumbnails-renderer.component';
import { ToolPanelComponent } from '../components/tool-panel/tool-panel.component';
import { VideotitleRendererComponent } from '../components/videotitle-renderer/videotitle-renderer.component';
import { AgGridService } from '../shared/services/ag-grid.service';
import "ag-grid-enterprise";
import { columnDefs } from '../shared/constants/ag-grid-option';
import { GridApi, ColumnApi, IToolPanel } from 'ag-grid-community';
@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.css'],
})
export class MyGridApplicationComponent implements OnInit {
  // ag-grid options
  columnDefs;
  rowData;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  rowSelection;
  defaultColDef;
  frameworkComponents;
  getRowHeight;
  sideBar;
  toolPanelComponent: ToolPanelComponent;
  // toolbar options
  checkboxVisibility = false;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  @ViewChild(ToolPanelComponent) set toolPanel(toolPanelComponent: ToolPanelComponent) {
    this.toolPanelComponent = toolPanelComponent;
  }
  constructor(private agGridService: AgGridService) { }

  ngOnInit() {
    // column options
    this.columnDefs = columnDefs;
    this.defaultColDef = {
      resizable: true
    };

    // row options
    this.rowSelection = 'multiple';
    this.getRowHeight = () => {
      return 90;
    };

    // components used for ag-grid
    this.frameworkComponents = {
      thumbnailsRenderer: ThumbnailsRendererComponent,
      videoTitleRenderer: VideotitleRendererComponent,
      publishedOnRenderer: PublishedOnRendererComponent,
      descriptionRenderer: DescriptionRendererComponent,
      toolPanel: ToolPanelComponent
    };

    // sidebar (only works on ag-grid enterprise)
    this.sideBar = {
      toolPanels: [
        {
          id: 'toolbar',
          labelDefault: 'ToolBar',
          labelKey: 'toolbar',
          iconKey: 'columns',
          toolPanel: 'toolPanel'
        }
      ],
      defaultToolPanel: 'toolbar'
    };
    this.fetchLists();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.addEventListener('toggleSelectionMode', this.toggleSelectionMode.bind(this));
    this.gridColumnApi.setColumnVisible('checkbox', false);
  }

  fetchLists() {
    this.agGridService
    .fetchLists()
    .subscribe((res: any) => {
      this.rowData = res.items.map(item => {
        return {
          thumbnails: item.snippet.thumbnails.default.url,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          description: item.snippet.description,
          videoId: item.id.videoId
        };
      });
    });
  }

  toggleSelectionMode() {
    this.checkboxVisibility = !this.checkboxVisibility;
    this.gridColumnApi.setColumnVisible('checkbox', this.checkboxVisibility);
    console.log(this.toolPanelComponent);
  }
}
