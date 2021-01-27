import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxDateBoxModule,
  DxDropDownButtonModule,
  DxFileUploaderModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxProgressBarModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxTagBoxModule,
  DxTextBoxModule,
  DxTreeMapModule,
  DxTreeViewModule,
  DxValidatorModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
