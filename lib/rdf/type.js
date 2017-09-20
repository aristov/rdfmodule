import { RDFProperty } from './property'

const LOCAL_NAME = 'type'

export class RDFType extends RDFProperty {
    static get localName() {
        return LOCAL_NAME
    }
}

export function type(init) {
    return new RDFType(init)
}
