import { RDFDescription } from './description'
import { RDFS_NAMESPACE_URI, RDFS_PREFIX } from './rdfs'

const LOCAL_NAME = 'range'

export class RDFSRange extends RDFDescription {
    static get localName() {
        return LOCAL_NAME
    }
    static get namespaceURI() {
        return RDFS_NAMESPACE_URI
    }
    static get prefix() {
        return RDFS_PREFIX
    }
}

export function range(init) {
    return new RDFSRange(init)
}
