import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemographicsComponent } from './components/demographics/demographics.component';
import { FrontIdComponent } from './components/front-id/front-id.component';
import { BackIdComponent } from './components/back-id/back-id.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import demographics from './_reducers/demographics';
import { CaptureImageComponent } from './components/capture-image/capture-image.component';

const ROUTES: Routes = [
  { path: '', component: DemographicsComponent},
  { path: 'front-id', component: FrontIdComponent},
  { path: 'back-id', component: BackIdComponent},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DemographicsComponent,
    FrontIdComponent,
    BackIdComponent,
    ErrorComponent,
    FileUploadComponent,
    CaptureImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({demographics}),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
