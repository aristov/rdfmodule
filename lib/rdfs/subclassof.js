import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'subClassOf'

export class RDFSSubClassOf extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function subClassOf(init) {
    return new RDFSSubClassOf(init)
}
