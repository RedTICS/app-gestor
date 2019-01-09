import { Component, OnInit } from '@angular/core';

import { Expediente } from '../../clases/Expediente';

import { GestorService } from '../../services/gestor/gestor.service';

declare var $: any;

@Component({
    selector: 'app-gestor',
    templateUrl: './carga-expediente.component.html',
    styleUrls: ['./carga-expediente.component.scss']
})
export class CargaExpedienteComponent implements OnInit {
    expediente: Expediente = {
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

    ngOnInit() {
        $(document).ready(function () {
            $('.datepicker').datepicker({
                autoClose: true,
                format: 'dd/mm/yyyy',
                i18n: {
                    cancel: 'Cancelar',
                    clear: 'Limpiar',
                    done: 'Ok',
                    previousMonth: '‹',
                    nextMonth: '›',
                    months: [
                        'Enero',
                        'Febrero',
                        'Marzo',
                        'Apbril',
                        'Mayo',
                        'Junio',
                        'Julio',
                        'Augosto',
                        'Septiembre',
                        'Octubre',
                        'Noviembre',
                        'Deciembre'
                    ],
                    monthsShort: [
                        'Ene',
                        'Feb',
                        'Mar',
                        'Abr',
                        'May',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                    weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
                }
            });
        });
    }

    onSubmit({ value, valid, form }: { value: Expediente, valid: boolean, form: any }) {
        this.gestorService.addExpediente(value).subscribe(exp => {

            console.log("Expediente: ", exp);
        });
    }

    constructor(private gestorService: GestorService) { }
}