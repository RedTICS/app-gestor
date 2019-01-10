export class Categoria {
    public _id: String;
    public nombre: String;

    constructor(categoria?: any) {
        categoria = categoria || {};
        this._id = categoria._id;
        this.nombre = categoria.nombre || '';
    }
}
