import { RDFDOMAssembler } from '../lib'

const DC_TERMS_NAMESPACE_URI = 'http://purl.org/dc/terms/'

export class DCTDOMAssembler extends RDFDOMAssembler {
    static get namespaceURI() {
        return DC_TERMS_NAMESPACE_URI
    }
}

export function conformsTo(init) {
    return new DCTDOMAssembler(init)
}
export function created(init) {
    return new DCTDOMAssembler(init)
}
export function dateAccepted(init) {
    return new DCTDOMAssembler(init)
}
export function dateCopyrighted(init) {
    return new DCTDOMAssembler(init)
}
export function dateSubmitted(init) {
    return new DCTDOMAssembler(init)
}
export function educationLevel(init) {
    return new DCTDOMAssembler(init)
}
export function extent(init) {
    return new DCTDOMAssembler(init)
}
export function hasFormat(init) {
    return new DCTDOMAssembler(init)
}
export function hasPart(init) {
    return new DCTDOMAssembler(init)
}
export function hasVersion(init) {
    return new DCTDOMAssembler(init)
}
export function instructionalMethod(init) {
    return new DCTDOMAssembler(init)
}
export function isFormatOf(init) {
    return new DCTDOMAssembler(init)
}
export function isPartOf(init) {
    return new DCTDOMAssembler(init)
}
export function isReferencedBy(init) {
    return new DCTDOMAssembler(init)
}
export function isReplacedBy(init) {
    return new DCTDOMAssembler(init)
}
export function isRequiredBy(init) {
    return new DCTDOMAssembler(init)
}
export function issued(init) {
    return new DCTDOMAssembler(init)
}
export function isVersionOf(init) {
    return new DCTDOMAssembler(init)
}
export function license(init) {
    return new DCTDOMAssembler(init)
}
export function mediator(init) {
    return new DCTDOMAssembler(init)
}
export function medium(init) {
    return new DCTDOMAssembler(init)
}
export function modified(init) {
    return new DCTDOMAssembler(init)
}
export function provenance(init) {
    return new DCTDOMAssembler(init)
}
export function references(init) {
    return new DCTDOMAssembler(init)
}
export function replaces(init) {
    return new DCTDOMAssembler(init)
}
export function requires(init) {
    return new DCTDOMAssembler(init)
}
export function rightsHolder(init) {
    return new DCTDOMAssembler(init)
}
export function spatial(init) {
    return new DCTDOMAssembler(init)
}
export function tableOfContents(init) {
    return new DCTDOMAssembler(init)
}
export function temporal(init) {
    return new DCTDOMAssembler(init)
}
export function valid(init) {
    return new DCTDOMAssembler(init)
}

const DC_ELEMENTS_NAMESPACE_URI = 'http://purl.org/dc/elements/1.1/'

export class DCDOMAssembler extends RDFDOMAssembler {
    static get namespaceURI() {
        return DC_ELEMENTS_NAMESPACE_URI
    }
}

export function contributor(init) {
    return new DCTDOMAssembler(init)
}
export function coverage(init) {
    return new DCTDOMAssembler(init)
}
export function creator(init) {
    return new DCTDOMAssembler(init)
}
export function date(init) {
    return new DCTDOMAssembler(init)
}
export function description(init) {
    return new DCTDOMAssembler(init)
}
export function format(init) {
    return new DCTDOMAssembler(init)
}
export function identifier(init) {
    return new DCTDOMAssembler(init)
}
export function language(init) {
    return new DCTDOMAssembler(init)
}
export function publisher(init) {
    return new DCTDOMAssembler(init)
}
export function relation(init) {
    return new DCTDOMAssembler(init)
}
export function rights(init) {
    return new DCTDOMAssembler(init)
}
export function source(init) {
    return new DCTDOMAssembler(init)
}
export function subject(init) {
    return new DCTDOMAssembler(init)
}
export function title(init) {
    return new DCTDOMAssembler(init)
}
export function type(init) {
    return new DCTDOMAssembler(init)
}
