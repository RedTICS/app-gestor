import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CargaExpedienteComponent } from './main/gestor/carga-expediente.component';

import { GestorService } from './services/gestor/gestor.service';

@NgModule({
  declarations: [
    AppComponent,
    CargaExpedienteComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
