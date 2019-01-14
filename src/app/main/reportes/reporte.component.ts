import { Component, OnInit } from '@angular/core';

import { GestorService } from './../../services/gestor/gestor.service';

import { Expediente } from './../../clases/Expediente';

@Component({
    selector: 'app-reporte',
    templateUrl: './reporte.component.html'
})
export class ReporteComponent implements OnInit {
    expedientes: Expediente[];
    searchText: any;

    ngOnInit() {

        this.gestorService.getExpedientes().subscribe(exp => {
            this.expedientes = exp;
        });
    }

    constructor(private gestorService: GestorService) { }
}
