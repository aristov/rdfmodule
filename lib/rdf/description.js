import { RDFElementAssembler, RDF_NAMESPACE_URI } from './rdf'

const RDF_DESCRIPTION_LOCAL_NAME = 'Description'

export class RDFDescription extends RDFElementAssembler {
    /**
     * @param {String} about
     */
    set about(about) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:about', about)
    }

    /**
     * @returns {String}
     */
    get about() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:about')
    }

    /**
     * @param {String} datatype
     */
    set datatype(datatype) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:datatype', datatype)
    }

    /**
     *
     * @returns {String}
     */
    get datatype() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:datatype')
    }

    /**
     * @param {String} nodeID
     */
    set nodeID(nodeID) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:nodeID', nodeID)
    }

    /**
     * @returns {String}
     */
    get nodeID() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:nodeID')
    }

    /**
     * @param {String} parseType
     */
    set parseType(parseType) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:parseType', parseType)
    }

    /**
     * @returns {String}
     */
    get parseType() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:parseType')
    }

    /**
     * @param {String} resource
     */
    set resource(resource) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:resource', resource)
    }

    /**
     * @returns {String}
     */
    get resource() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:resource')
    }

    /**
     * @param {String} ID
     */
    set ID(ID) {
        this.node.setAttributeNS(RDF_NAMESPACE_URI, 'rdf:ID', ID)
    }

    /**
     * @returns {String}
     */
    get ID() {
        return this.node.getAttributeNS(RDF_NAMESPACE_URI, 'rdf:ID')
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return RDF_DESCRIPTION_LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {RDFDescription}
 */
export function Description(init) {
    return new RDFDescription(init)
}
