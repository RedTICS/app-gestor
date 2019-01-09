import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaExpedienteComponent } from './main/gestor/carga-expediente.component';


const routes: Routes = [
  { path: 'cargarExpediente', component: CargaExpedienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
