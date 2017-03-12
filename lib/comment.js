import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'comment'

export class RDFSComment extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function comment(init) {
    return new RDFSComment(init)
}
