import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'seeAlso'

export class RDFSSeeAlso extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function seeAlso(init) {
    return new RDFSSeeAlso(init)
}

