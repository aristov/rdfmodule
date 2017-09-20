import { RDFDescription } from './description'
import { RDFS_NAMESPACE_URI, RDFS_PREFIX } from './rdfs'

const LOCAL_NAME = 'member'

export class RDFSMember extends RDFDescription {
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

export function member(init) {
    return new RDFSMember(init)
}
