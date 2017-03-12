import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'range'

export class RDFRange extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function range(init) {
    return new RDFRange(init)
}
