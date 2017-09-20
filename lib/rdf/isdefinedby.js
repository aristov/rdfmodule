import { RDFSSeeAlso } from './seealso'

const LOCAL_NAME = 'isDefinedBy'

export class RDFSIsDefinedBy extends RDFSSeeAlso {
    static get localName() {
        return LOCAL_NAME
    }
}

export function isDefinedBy(init) {
    return new RDFSIsDefinedBy(init)
}
