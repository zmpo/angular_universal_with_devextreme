import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxPivotGridModule, DxScrollViewModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxScrollViewModule,
    DxLoadPanelModule,
    DxPivotGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
