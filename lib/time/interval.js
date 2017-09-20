import { OWLTimeTemporalEntity } from './temporalentity'

export class OWLTimeInterval extends OWLTimeTemporalEntity {
    static get localName() {
        return Interval.name
    }
}

export function Interval(init) {
    return new OWLTimeInterval(init)
}
