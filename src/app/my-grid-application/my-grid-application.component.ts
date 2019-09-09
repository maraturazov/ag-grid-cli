import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { DescriptionRendererComponent } from '../components/description-renderer/description-renderer.component';
import { PublishedOnRendererComponent } from '../components/published-on-renderer/published-on-renderer.component';
import { ThumbnailsRendererComponent } from '../components/thumbnails-renderer/thumbnails-renderer.component';
import { ToolPanelComponent } from '../components/tool-panel/tool-panel.component';
import { VideotitleRendererComponent } from '../components/videotitle-renderer/videotitle-renderer.component';
import { AgGridService } from '../shared/services/ag-grid.service';

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent implements OnInit {
  // ag-grid options
  columnDefs;
  rowData;
  gridApi;
  gridColumnApi;
  rowSelection;
  defaultColDef;
  frameworkComponents;
  getRowHeight;
  sideBar;

  // toolbar options
  totalRecords = 0;
  selectedRecordsCnt = 0;
  checkboxVisibility = false;
  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor(private agGridService: AgGridService) { }

  ngOnInit() {
    // column options
    this.columnDefs = [
      {
        headerName: '',
        field: 'checkbox',
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        width: 38,
        resizable: false
      },
      {
        headerName: '',
        field: 'thumbnails',
        cellRenderer: 'thumbnailsRenderer',
        width: 144
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        cellRenderer: 'publishedOnRenderer',
        width: 200
      },
      {
        headerName: 'Video Title',
        field: 'title',
        cellRenderer: 'videoTitleRenderer',
        width: 620
      },
      {
        headerName: 'Description',
        field: 'description',
        cellRenderer: 'descriptionRenderer',
        width: 900
      }
    ];
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
          labelDefault: 'Tool Bar',
          labelKey: 'toolbar',
          toolPanel: 'toolPanel'
        }
      ]
    };
    this.fetchLists();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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
      this.totalRecords = this.rowData.length;
    });
  }

  toggleSelectionMode() {
    this.checkboxVisibility = !this.checkboxVisibility;
    this.gridColumnApi.setColumnVisible('checkbox', this.checkboxVisibility);
  }

  onSelectionChanged() {
    this.selectedRecordsCnt = this.gridApi.getSelectedRows().length;
  }
}
