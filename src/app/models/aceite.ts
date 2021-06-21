import { Oferta, Pedido, Usuario } from ".";

export interface Aceite {
    aceiteid?:       number;
    pedido?:         Pedido;
    oferta?:         Oferta;
    aceito?:         Date;
    taxafinal?:      number;
    valorinicial?:   number;
    valorfinal?:     number;
    tempofinal?:     number;
    tipotempofinal?: number;
    requerente?:     Usuario;
    credor?:         Usuario;
}