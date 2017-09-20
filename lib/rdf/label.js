import { RDFDescription } from './description'
import { RDFS_NAMESPACE_URI, RDFS_PREFIX } from './rdfs'

const LOCAL_NAME = 'label'

export class RDFSLabel extends RDFDescription {
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

export function label(init) {
    return new RDFSLabel(init)
}
