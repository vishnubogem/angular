// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
