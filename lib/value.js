import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'value'

export class RDFValue extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function value(init) {
    return new RDFValue(init)
}
