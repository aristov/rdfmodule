import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'Bag'

export class RDFBag extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Bag(init) {
    return RDFBag(init)
}
