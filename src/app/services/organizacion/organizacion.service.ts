import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrganizacionService {
    organizacionURL: String = 'http://localhost:3002/ges/modules/ges';

    public getOrganizaciones(){
        return this.httpClient.get<any[]>(`${this.organizacionURL}/organizaciones`);
    }

    constructor(private httpClient: HttpClient) { }
}
