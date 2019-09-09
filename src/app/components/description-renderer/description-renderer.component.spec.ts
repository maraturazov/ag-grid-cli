import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { DescriptionRendererComponent } from './description-renderer.component';

describe('DescriptionRendererComponent', () => {
  let component: DescriptionRendererComponent;
  let fixture: ComponentFixture<DescriptionRendererComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AgGridModule.withComponents([DescriptionRendererComponent])
      ],
      declarations: [ DescriptionRendererComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionRendererComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.agInit({data: {value: 'description'}});
    fixture.detectChanges();
  }));

  it('should read description', () => {
    const description = component.params.data.value;
    expect(description).toBeTruthy();
  });
});
