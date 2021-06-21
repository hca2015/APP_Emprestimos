//Declaração de enum
export enum KDTipoTempo {
    Dias, Meses, Anos
}
//Exportando namespace da enum para poder usar no <select> dinamicamente.
export namespace KDTipoTempo {
    export function values() {
        return Object.keys(KDTipoTempo).filter(
            (type) => isNaN(<any>type) && typeof (KDTipoTempo[type]) !== 'function'
        );
    }
    export function getEnumValue(val: String) {
        let value = values().filter(item => item === val)[0];
        return values().indexOf(value);
    }
}