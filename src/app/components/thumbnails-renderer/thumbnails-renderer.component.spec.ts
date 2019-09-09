import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ThumbnailsRendererComponent } from './thumbnails-renderer.component';

describe('ThumbnailsRendererComponent', () => {
  let component: ThumbnailsRendererComponent;
  let fixture: ComponentFixture<ThumbnailsRendererComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AgGridModule.withComponents([ThumbnailsRendererComponent])
      ],
      declarations: [ ThumbnailsRendererComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsRendererComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.agInit({data: {value: 'imgUrl'}});
    fixture.detectChanges();
  });

  it('should read thumbnails', () => {
    const thumbnails = component.params.data.value;
    expect(thumbnails).toBeTruthy();
  });
});
