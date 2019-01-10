export class Expediente {
    public _id: String;
    public efector: String;
    public fecha: Date;
    public categoria: String;
    public cantidad: Number;
    public monto: Number;
    public descripcion?: String;
    public detalle?: String;
    public expediente?: String;

    constructor(expediente?: any) {
        expediente = expediente || {};
        this._id = expediente._id;
        this.efector = expediente.efector || '';
        this.fecha = expediente.fecha || '';
        this.categoria = expediente.categoria || '';
        this.cantidad = expediente.cantidad || 0;
        this.monto = expediente.monto || 0;
        this.descripcion = expediente.descripcion || '';
        this.detalle = expediente.detalle || '';
        this.expediente = expediente.expediente || '';
    }
}
