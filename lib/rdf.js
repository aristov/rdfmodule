import { RDFDOMAssembler } from 'assembler'

const LOCAL_NAME = 'RDF'

export class RDFRDF extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function RDF(init) {
    return new RDFRDF(init)
}
