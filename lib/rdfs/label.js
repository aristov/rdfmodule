import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'label'

export class RDFSLabel extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function label(init) {
    return new RDFSLabel(init)
}
