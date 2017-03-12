import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'HTML'

export class RDFHTML extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function HTML(init) {
    return new RDFHTML(init)
}
