import { RDFDescription } from './description'

const LOCAL_NAME = 'Property'

export class RDFProperty extends RDFDescription {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Property(init) {
    return new RDFProperty(init)
}
