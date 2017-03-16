import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'subPropertyOf'

export class RDFSSubPropertyOf extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function subPropertyOf(init) {
    return new RDFSSubPropertyOf(init)
}
