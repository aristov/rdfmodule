import { OWLTimeInterval } from './interval'

export class OWLTimeProperInterval extends OWLTimeInterval {
    static get localName() {
        return ProperInterval.name
    }
}

export function ProperInterval(init) {
    return new OWLTimeProperInterval(init)
}
