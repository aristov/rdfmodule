import { RDFDOMAssembler } from '../assembler'

const LOCAL_NAME = 'Alt'

export class RDFAlt extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Alt(init) {
    return new RDFAlt(init)
}
