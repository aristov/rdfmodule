import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'type'

export class RDFType extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function type(init) {
    return new RDFType(init)
}
