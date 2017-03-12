import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'first'

export class RDFFirst extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function first(init) {
    return new RDFFirst(init)
}
