import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaExpedienteComponent } from './main/gestor/carga-expediente.component';
import { ReporteComponent } from './main/reportes/reporte.component';


const routes: Routes = [
  { path: 'cargarExpediente/:id', component: CargaExpedienteComponent },
  { path: 'reporte', component: ReporteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
