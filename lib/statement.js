import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'Statement'

export class RDFStatement extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Statement(init) {
    return new RDFStatement(init)
}
