import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'Literal'

export class RDFLiteral extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Literal(init) {
    return new RDFLiteral(init)
}
