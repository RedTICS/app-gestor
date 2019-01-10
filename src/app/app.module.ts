import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CargaExpedienteComponent } from './main/gestor/carga-expediente.component';
import { ReporteComponent } from './main/reportes/reporte.component';

import { GestorService } from './services/gestor/gestor.service';
import { OrganizacionService } from './services/organizacion/organizacion.service';
import { CategoriaService } from './services/categorias/categorias.service';

import { Ng2CompleterModule } from 'ng2-completer';

import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CargaExpedienteComponent,
    ReporteComponent,
    FiltroPipe
  ],
  imports: [
    MaterializeModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2CompleterModule
  ],
  providers: [GestorService, OrganizacionService, CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
