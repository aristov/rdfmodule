import { RDFSResource } from './resource'

const LOCAL_NAME = 'Container'

export class RDFSContainer extends RDFSResource {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Container(init) {
    return new RDFSContainer(init)
}

