import { RDFDOMAssembler } from '../'

const DC_TERMS_NAMESPACE_URI = 'http://purl.org/dc/terms/'

const FIRST_LETTER_RE = /^(\w)/
const toLowerCase = s => s.toLowerCase()

export class DCTDOMAssembler extends RDFDOMAssembler {
    static get namespaceURI() {
        return DC_TERMS_NAMESPACE_URI
    }
    static get localName() {
        this.name.replace(FIRST_LETTER_RE, toLowerCase)
    }
}

const DC_ELEMENTS_NAMESPACE_URI = 'http://purl.org/dc/elements/1.1/'

export class DCDOMAssembler extends DCTDOMAssembler {
    static get namespaceURI() {
        return DC_ELEMENTS_NAMESPACE_URI
    }
}
