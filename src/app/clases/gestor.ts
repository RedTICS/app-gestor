export class Gestor {
    public _id: String;
    public efector: String;
    public fecha: Date;
    public categoria: String;
    public cantidad: Number;
    public monto: Number;
    public descripcion?: String;
    public detalle?: String;
    public expediente?: String;

    constructor(gestor?: any) {
        gestor = gestor || {};
        this._id = gestor._id;
        this.efector = gestor.efector || '';
        this.fecha = gestor.fecha || '';
        this.categoria = gestor.categoria || '';
        this.cantidad = gestor.cantidad || 0;
        this.monto = gestor.monto || 0;
        this.descripcion = gestor.descripcion || '';
        this.detalle = gestor.detalle || '';
        this.expediente = gestor.expediente || '';
    }
}
