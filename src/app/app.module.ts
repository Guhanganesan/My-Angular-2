import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { MyfirstcompComponent } from './myfirstcomp/myfirstcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    MyfirstcompComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
