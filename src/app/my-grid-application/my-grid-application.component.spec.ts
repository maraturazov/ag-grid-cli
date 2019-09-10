import { HttpClientModule } from '@angular/common/http';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { DescriptionRendererComponent } from '../components/description-renderer/description-renderer.component';
import { PublishedOnRendererComponent } from '../components/published-on-renderer/published-on-renderer.component';
import { ThumbnailsRendererComponent } from '../components/thumbnails-renderer/thumbnails-renderer.component';
import { VideotitleRendererComponent } from '../components/videotitle-renderer/videotitle-renderer.component';
import { AgGridService } from '../shared/services/ag-grid.service';
import { MyGridApplicationComponent } from './my-grid-application.component';
import { ToolPanelComponent } from '../components/tool-panel/tool-panel.component';
import { IToolPanelParams } from 'ag-grid-community';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MyGridApplicationComponent', () => {
  let component: MyGridApplicationComponent;
  let fixture: ComponentFixture<MyGridApplicationComponent>;
  let agGridService: AgGridService;
  let debugElement: DebugElement;
  let fetchListsSpy;
  let childComponent: ToolPanelComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AgGridModule.withComponents([
          MyGridApplicationComponent,
          ThumbnailsRendererComponent,
          VideotitleRendererComponent,
          PublishedOnRendererComponent,
          DescriptionRendererComponent,
          ToolPanelComponent
        ])
      ],
      declarations: [
        MyGridApplicationComponent,
        ThumbnailsRendererComponent,
        VideotitleRendererComponent,
        PublishedOnRendererComponent,
        DescriptionRendererComponent,
        ToolPanelComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        AgGridService,
        {
          provide: ToolPanelComponent,
          useClass: MyGridApplicationComponent,
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGridApplicationComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    agGridService = debugElement.injector.get(AgGridService);
    component.toolPanelComponent = childComponent;
    fetchListsSpy = spyOn(agGridService, 'fetchLists').and.callThrough();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch lists', () => {
    expect(fetchListsSpy).toHaveBeenCalled();
    expect(component.rowData).toBeTruthy();
  });

  it(`should toggle selection mode once 'Toggle Selection Mode' button is clicked`, () => {
    fixture.detectChanges();
    spyOn(component, 'toggleSelectionMode').and.callThrough();
    childComponent = debugElement.query(By.css('app-tool-panel')).componentInstance;
    childComponent.toggleSelectionMode();
    fixture.detectChanges();
    console.log(777, childComponent);
    expect(component.toggleSelectionMode).toHaveBeenCalled();
  });

  it('should show total records', () => {
    component.gridApi.dispatchEvent({type: 'modelUpdated'});
    fixture.detectChanges();
    // const totalRecordsInHTML = debugElement.query(By.css('#total-records')).nativeElement.innerText;
    const totalRecords = component.rowData.length;
    expect(childComponent.totalRecords).toBe(totalRecords);
  });

  it('should show selected records', () => {
    fixture.detectChanges();
    const selectedRecordsInHTML = debugElement.query(By.css('#selected-records')).nativeElement.innerText;
    const selectedRecords = component.gridApi.getSelectedRows().length;
    expect(selectedRecordsInHTML).toBe(`${selectedRecords}`);
  });
});
