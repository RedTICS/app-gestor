import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestorComponent } from './main/gestor/gestor.component';

import { GestorService } from './services/gestor/gestor.service';

import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    GestorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [GestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
