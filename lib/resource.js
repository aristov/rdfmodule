import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'Resource'

export class RDFSResource extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Resource(init) {
    return new RDFSResource(init)
}
