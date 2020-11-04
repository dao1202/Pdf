import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { InputTextModule } from 'primeng/inputtext';

import { DialogModule } from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';


import { PdfFormComponent } from './pdf/pdf-form/pdf-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ToolbarModule,
    RadioButtonModule,
    InputTextModule,
    InputSwitchModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
