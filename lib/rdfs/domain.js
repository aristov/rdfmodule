import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'domain'

export class RDFSDomain extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function domain(init) {
    return new RDFSDomain(init)
}
