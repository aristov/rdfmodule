import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'Property'

export class RDFProperty extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Property(init) {
    return new RDFProperty(init)
}
