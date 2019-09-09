import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
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

describe('MyGridApplicationComponent', () => {
  let component: MyGridApplicationComponent;
  let fixture: ComponentFixture<MyGridApplicationComponent>;
  let agGridService: AgGridService;
  let debugElement: DebugElement;
  let fetchListsSpy;
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
          DescriptionRendererComponent
        ])
      ],
      declarations: [
        MyGridApplicationComponent,
        ThumbnailsRendererComponent,
        VideotitleRendererComponent,
        PublishedOnRendererComponent,
        DescriptionRendererComponent],
      providers: [AgGridService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGridApplicationComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    agGridService = debugElement.injector.get(AgGridService);
    fetchListsSpy = spyOn(agGridService, 'fetchLists').and.callThrough();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch lists', () => {
    expect(fetchListsSpy).toHaveBeenCalled();
    expect(component.rowData).toBeTruthy();
    fixture.detectChanges();
  });

  it(`should toggle selection mode once 'Toggle Selection Mode' button is clicked`, () => {
    const prevToggleStatus = component.checkboxVisibility;
    debugElement.query(By.css('#btn-toggle')).nativeElement.click();
    fixture.detectChanges();
    expect(component.checkboxVisibility).toBe(!prevToggleStatus);
  });

  it('should show total records', () => {
    fixture.detectChanges();
    const totalRecordsInHTML = debugElement.query(By.css('#total-records')).nativeElement.innerText;
    const totalRecords = component.rowData.length;
    expect(totalRecordsInHTML).toBe(`${totalRecords}`);
  });

  it('should show selected records', () => {
    fixture.detectChanges();
    const selectedRecordsInHTML = debugElement.query(By.css('#selected-records')).nativeElement.innerText;
    const selectedRecords = component.gridApi.getSelectedRows().length;
    expect(selectedRecordsInHTML).toBe(`${selectedRecords}`);
  });
});
