import { RDFDOMAssembler } from './assembler'

const LOCAL_NAME = 'List'

export class RDFList extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function List(init) {
    return new RDFList(init)
}
