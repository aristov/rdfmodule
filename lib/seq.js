import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'Seq'

export class RDFSeq extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Seq(init) {
    return new RDFSeq(init)
}
