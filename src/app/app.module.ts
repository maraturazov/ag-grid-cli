import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionRendererComponent } from './components/description-renderer/description-renderer.component';
import { PublishedOnRendererComponent } from './components/published-on-renderer/published-on-renderer.component';
import { ThumbnailsRendererComponent } from './components/thumbnails-renderer/thumbnails-renderer.component';
import { ToolPanelComponent } from './components/tool-panel/tool-panel.component';
import { VideotitleRendererComponent } from './components/videotitle-renderer/videotitle-renderer.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { AgGridService } from './shared/services/ag-grid.service';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    ThumbnailsRendererComponent,
    VideotitleRendererComponent,
    PublishedOnRendererComponent,
    DescriptionRendererComponent,
    ToolPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      ThumbnailsRendererComponent,
      VideotitleRendererComponent,
      PublishedOnRendererComponent,
      DescriptionRendererComponent,
      ToolPanelComponent,
    ]),
  ],
  providers: [ AgGridService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule { }
