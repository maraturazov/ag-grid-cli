import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { VideotitleRendererComponent } from './videotitle-renderer.component';

describe('VideotitleRendererComponent', () => {
  let component: VideotitleRendererComponent;
  let fixture: ComponentFixture<VideotitleRendererComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([VideotitleRendererComponent])
      ],
      declarations: [ VideotitleRendererComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotitleRendererComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.agInit({data: {videoId: 'videoId'}});
    fixture.detectChanges();
  });

  it('should read videoId', () => {
    const videoId = component.params.data.videoId;
    expect(videoId).toBeTruthy();
  });
});
