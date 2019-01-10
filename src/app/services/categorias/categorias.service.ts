import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {
    categoriaURL: String = 'http://localhost:3002/ges/modules/ges';

    public getCategorias() {
        return this.httpClient.get<any[]>(`${this.categoriaURL}/categorias`);
    }

    constructor(private httpClient: HttpClient) { }
}
