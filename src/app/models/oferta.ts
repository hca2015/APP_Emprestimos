import { Pedido, Usuario } from ".";

export interface Oferta {
    ofertaid?:  number;
    usuario?:   Usuario;
    pedido?:    Pedido;
    taxa?:      number;
    tempo?:     number;
    tipotempo?: number;
    criado?:    Date;
    cancelado?: number;
    pedidoid?: number;
}