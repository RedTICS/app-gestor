import { Component } from '@angular/core';

import { Gestor } from './../../clases/gestor';

import { GestorService } from '../../services/gestor/gestor.service';

@Component({
    selector: 'app-gestor',
    templateUrl: './gestor.component.html',
    styleUrls: ['./gestor.component.scss']
})
export class GestorComponent {
    gestor: Gestor = {
        _id: '',
        efector: '',
        fecha: new Date(),
        categoria: '',
        cantidad: 0,
        monto: 0,
        descripcion: '',
        detalle: '',
        expediente: ''
    };

    onSubmit({ value, valid, form }: { value: Gestor, valid: boolean, form: any }) {
        this.gestorService.addExpediente(value).subscribe(exp => {

            console.log("Expediente: ", exp);
        });
    }

    constructor(private gestorService: GestorService) { }
}