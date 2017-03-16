import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'Class'

export class RDFSClass extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Class(init) {
    return RDFSClass(init)
}
