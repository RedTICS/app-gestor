import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtro' })

export class FiltroPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }

        if (!searchText) {
            return items;
        }

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            debugger;
            return it.efector.toLowerCase().indexOf(searchText) !== -1 ||
                it.categoria.toLowerCase().indexOf(searchText) !== -1 ||
                it.expediente.toLowerCase().indexOf(searchText) !== -1 ||
                it.descripcion.toLowerCase().indexOf(searchText) !== -1 ||
                !searchText;
        });
    }
}