import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'isDefinedBy'

export class RDFSIsDefinedBy extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function isDefinedBy(init) {
    return new RDFSIsDefinedBy(init)
}
