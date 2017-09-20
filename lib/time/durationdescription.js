import { OWLTimeGeneralDurationDescription } from './generaldurationdescription'

export class OWLTimeDurationDescription extends OWLTimeGeneralDurationDescription {
    static get localName() {
        return DurationDescription.name
    }
}

export function DurationDescription(init) {
    return new OWLTimeDurationDescription(init)
}
