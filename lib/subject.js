import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'subject'

export class RDFSubject extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function subject(init) {
    return RDFSubject(init)
}
