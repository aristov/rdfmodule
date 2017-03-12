import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'predicate'

export class RDFPredicate extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function predicate(init) {
    return new RDFPredicate(init)
}
