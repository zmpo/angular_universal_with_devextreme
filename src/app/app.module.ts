import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
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
    DxDateBoxModule,
    DxDropDownButtonModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxTagBoxModule,
    DxTextBoxModule,
    DxScrollViewModule,
    DxValidatorModule,
    DxPopupModule,
    DxFileUploaderModule,
    DxProgressBarModule,
    DxTreeViewModule,
    DxLoadPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
