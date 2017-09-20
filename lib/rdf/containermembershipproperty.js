import { RDFProperty } from './property'
import { RDFS_NAMESPACE_URI, RDFS_PREFIX } from './rdfs'

const LOCAL_NAME = 'ContainerMembershipProperty'

export class RDFSContainerMembershipProperty extends RDFProperty {
    static get namespaceURI() {
        return RDFS_NAMESPACE_URI
    }
    static get prefix() {
        return RDFS_PREFIX
    }
    static get localName() {
        return LOCAL_NAME
    }
}

export function ContainerMembershipProperty(init) {
    return new RDFSContainerMembershipProperty(init)
}
