import { RDFSResource } from './resource'

const LOCAL_NAME = 'Literal'

export class RDFSLiteral extends RDFSResource {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Literal(init) {
    return new RDFSLiteral(init)
}

