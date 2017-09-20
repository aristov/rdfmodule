import { RDFDescription } from '../rdf/index'

export const OWL_TIME_NAMESPACE_URI = 'http://www.w3.org/2006/time#'
export const OWL_TIME_PREFIX = 'time'

export class OWLTimeElementAssembler extends RDFDescription {
    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return OWL_TIME_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return OWL_TIME_PREFIX
    }
}
