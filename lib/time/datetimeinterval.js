import { OWLTimeProperInterval } from './properinterval'

export class OWLTimeDateTimeInterval extends OWLTimeProperInterval {
    replaceWith(instance) {
        this.node.replaceWith(instance.node)
    }

    static get localName() {
        return DateTimeInterval.name
    }
}

export function DateTimeInterval(init) {
    return new OWLTimeDateTimeInterval(init)
}
