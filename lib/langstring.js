import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'langString'

export class RDFLangString extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function langString(init) {
    return new RDFLangString(init)
}
