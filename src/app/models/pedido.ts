import { Oferta, Usuario } from ".";

export interface Pedido {
    pedidoid?: number;
    usuario?:  Usuario;
    valor?:    number;
    criado?:   Date;
    aceito?:   Date;
    ofertas?:  Oferta[];
    criadostr?: string;
    aceitostr?: string;
}