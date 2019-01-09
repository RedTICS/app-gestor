import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Expediente } from '../../clases/Expediente';

@Injectable()
export class GestorService {
    gestorURL: String = 'http://localhost:3002/ges/modules/ges';

    public addExpediente(expediente: Expediente) {
        return this.httpClient.post(`${this.gestorURL}/expediente`, expediente);
    }

    constructor(private httpClient: HttpClient) { }
}
