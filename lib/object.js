import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'object'

export class RDFObject extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function object(init) {
    return new RDFObject(init)
}

