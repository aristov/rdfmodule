import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'rest'

export class RDFRest extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function rest(init) {
    return new RDFRest(init)
}
