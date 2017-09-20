import { RDFSResource } from './resource'

const LOCAL_NAME = 'Class'

export class RDFSClass extends RDFSResource {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Class(init) {
    return new RDFSClass(init)
}

