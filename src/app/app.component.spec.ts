import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-my-grid-application', template: '' })
class MyGridApplicationComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AppComponent, MyGridApplicationComponent]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  }));
});
