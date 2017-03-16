import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'member'

export class RDFSMember extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function member(init) {
    return new RDFSMember(init)
}
