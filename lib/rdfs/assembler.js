import { RDFDOMAssembler } from '../'

const RDFS_NAMESPACE_URI = 'http://www.w3.org/2000/01/rdf-schema#'
const RDFS_PREFIX = 'rdfs'

export class RDFSDOMAssembler extends RDFDOMAssembler {
    static get namespaceURI() {
        return RDFS_NAMESPACE_URI
    }
    static get prefix() {
        return RDFS_PREFIX
    }
}
