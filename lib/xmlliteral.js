import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'XMLLiteral'

export class RDFXMLLiteral extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function XMLLiteral(init) {
    return new RDFXMLLiteral(init)
}
