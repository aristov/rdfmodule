import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'Datatype'

export class RDFSDatatype extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Datatype(init) {
    return new RDFSDatatype(init)
}
