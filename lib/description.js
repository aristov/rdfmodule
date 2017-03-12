import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'Description'

export class RDFDescription extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Description(init) {
    return new RDFDescription(init)
}
