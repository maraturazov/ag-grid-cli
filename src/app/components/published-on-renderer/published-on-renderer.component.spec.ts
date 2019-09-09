import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { PublishedOnRendererComponent } from './published-on-renderer.component';

describe('PublishedOnRendererComponent', () => {
  let component: PublishedOnRendererComponent;
  let fixture: ComponentFixture<PublishedOnRendererComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AgGridModule.withComponents([PublishedOnRendererComponent])
      ],
      declarations: [ PublishedOnRendererComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedOnRendererComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.agInit({data: {value: 'Published At'}});
    fixture.detectChanges();
  });

  it('should read published at', () => {
    const publishedAt = component.params.data.value;
    expect(publishedAt).toBeTruthy();
  });
});
