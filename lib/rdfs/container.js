import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'Container'

export class RDFSContainer extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Container(init) {
    return new RDFSContainer(init)
}
