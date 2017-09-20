import { OWLTimeElementAssembler } from './time'

export class OWLTimeTemporalDuration extends OWLTimeElementAssembler {
    static get localName() {
        return TemporalDuration.name
    }
}

export function TemporalDuration(init) {
    return new OWLTimeTemporalDuration(init)
}
