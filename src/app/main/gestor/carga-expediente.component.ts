import { Component, OnInit } from '@angular/core';

import { Expediente } from '../../clases/Expediente';
import { Categoria } from '../../clases/Categorias';

import { GestorService } from '../../services/gestor/gestor.service';
import { OrganizacionService } from './../../services/organizacion/organizacion.service';
import { CategoriaService } from './../../services/categorias/categorias.service';

import { CompleterService, CompleterData } from 'ng2-completer';

import * as moment from 'moment';

declare var $: any;

@Component({
    selector: 'app-gestor',
    templateUrl: './carga-expediente.component.html',
    styleUrls: ['./carga-expediente.component.scss']
})
export class CargaExpedienteComponent implements OnInit {
    protected organizacionDataService: CompleterData;

    expediente: Expediente = {
        _id: '',
        efector: '',
        fecha: new Date,
        categoria: '',
        cantidad: 0,
        monto: 0,
        descripcion: '',
        detalle: '',
        expediente: ''
    };

    categorias: Categoria[] = [];

    ngOnInit() {
        this.categoriaService.getCategorias().subscribe(categoria => {
            this.categorias = categoria;
        });

        this.organizacionService.getOrganizaciones().subscribe(organizaciones => {
            this.organizacionDataService = this.completerService.local(organizaciones, 'nombre').searchFields('nombre')
                .titleField('nombre');
        });

        $(document).ready(function () {
            $('.modal').modal();

            $('.datepicker').pickadate({
                format: 'dd/mm/yyyy',
                closeOnSelect: true,
                closeOnClear: true,
                today: 'Hoy',
                clear: 'Limpiar',
                close: 'Cerrar',
                monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
                    'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'],
                monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
                weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                // onClose: function () {
                //     var $input = $('.datepicker').pickadate()

                //     // Use the picker object directly.
                //     var picker = $input.pickadate('picker')
                //     alert("Fecha: " + picker.component);
                //     // this.expediente.fecha = this.value;
                // }
            });
        });
    }

    onSubmit({ value, valid, form }: { value: Expediente, valid: boolean, form: any }) {
        debugger;
        value.fecha = moment(value.fecha, 'DD/MM/YYYY').toDate();
        this.gestorService.addExpediente(value).subscribe(exp => {
            debugger;
            let pepe = exp;
            $('#modal1').modal('open');
        });
    }

    constructor(private completerService: CompleterService, private categoriaService: CategoriaService,
        private organizacionService: OrganizacionService, private gestorService: GestorService) {
    }
}