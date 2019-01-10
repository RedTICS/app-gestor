import { Component, OnInit } from '@angular/core';

import { GestorService } from './../../services/gestor/gestor.service';

import { Expediente } from './../../clases/Expediente';

@Component({
    selector: 'app-reporte',
    templateUrl: './reporte.component.html'
})
export class ReporteComponent implements OnInit {
    expedientes: Expediente[];

    ngOnInit() {

        this.gestorService.getExpedientes().subscribe(exp => {
            debugger;
            this.expedientes = exp;
        });
    }

    constructor(private gestorService: GestorService) { }
}
