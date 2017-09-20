import { ElementAssembler, DocumentAssembler, AttrAssembler } from 'dommodule'

const { map } = Array.prototype

export const RDF_NAMESPACE_URI = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'
export const RDF_PREFIX = 'rdf'
export const RDF_DOCUMENT_ELEMENT_LOCAL_NAME = 'RDF'

export class RDFElementAssembler extends ElementAssembler {
    /**
     * @param {*} init
     */
    init(init) {
        this.node.instance = this
        super.init(init)
    }

    /**
     * @param {Function} assembler
     * @returns {[ElementAssembler]}
     */
    findAll(assembler) {
        const { namespaceURI, localName } = assembler
        const elements = namespaceURI?
            this.node.getElementsByTagNameNS(namespaceURI, localName) :
            this.node.getElementsByTagName(localName)
        const handler = node => node.instance || new assembler(node)
        return map.call(elements, handler)
    }

    /**
     * @param {Function} assembler
     * @returns {ElementAssembler|null}
     */
    find(assembler) {
        const instances = this.findAll(assembler)
        return instances[0] || null
    }


    /**
     * @param {Function} assembler
     * @param {*} value
     */
    setPropertyElementValue(assembler, value) {
        const instance = this.find(assembler)
        if(instance) instance.value = value
        else this.children = new assembler({ value })
    }

    /**
     * @param {Function} assembler
     * @returns {*|undefined}
     */
    getPropertyElementValue(assembler) {
        const instance = this.find(assembler)
        return instance? instance.value : undefined
    }

    /**
     * @param {NodeAssembler} instance
     */
    append(instance) {
        this.node.appendChild(instance.node)
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return RDF_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return RDF_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return RDF_DOCUMENT_ELEMENT_LOCAL_NAME
    }

    /**
     * @returns {String}
     */
    static get IRI() {
        return this.namespaceURI + this.localName
    }
}

export class RDFDocumentAssembler extends DocumentAssembler {
    /**
     * @returns {RDFElementAssembler}
     */
    get element() {
        const node = this.documentElement
        return node.instance || new RDFElementAssembler(node)
    }

    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return RDF_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return RDF_PREFIX
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return RDF_DOCUMENT_ELEMENT_LOCAL_NAME
    }
}

export class RDFAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return RDF_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return RDF_PREFIX
    }
}
