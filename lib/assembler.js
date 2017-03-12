import { ElementAssembler, DocumentAssembler } from 'dommodule'

const RDF_NAMESPACE_URI = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
const RDF_PREFIX = 'rdf'

export class RDFDOMAssembler extends ElementAssembler {
    set about(about) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'about', about)
    }
    get about() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'about')
    }
    set resource(resource) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'resource', resource)
    }
    get resource() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'resource')
    }
    set datatype(datatype) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'datatype', datatype)
    }
    get datatype() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'datatype')
    }
    set ID(ID) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'ID', ID)
    }
    get ID() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'ID')
    }
    set li(li) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'li', li)
    }
    get li() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'li')
    }
    set nodeID(nodeID) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'nodeID', nodeID)
    }
    get nodeID() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'nodeID')
    }
    set parseType(parseType) {
        this.setAttributeNS(RDF_NAMESPACE_URI, 'parseType', parseType)
    }
    get parseType() {
        return this.getAttributeNS(RDF_NAMESPACE_URI, 'parseType')
    }
    static get namespaceURI() {
        return RDF_NAMESPACE_URI
    }
    static get prefix() {
        return RDF_PREFIX
    }
}

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

const RDF_DOCUMENT_LOCAL_NAME = 'RDF'

export class RDFDocumentAssembler extends DocumentAssembler {
    static get namespaceURI() {
        return RDF_NAMESPACE_URI
    }
    static get prefix() {
        return RDF_PREFIX
    }
    static get localName() {
        return RDF_DOCUMENT_LOCAL_NAME
    }
}
