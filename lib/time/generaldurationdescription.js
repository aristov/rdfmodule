import { OWLTimeTemporalDuration } from './temporalduration'
import { OWLTimeHours, OWLTimeMinutes } from './index'

export class OWLTimeGeneralDurationDescription extends OWLTimeTemporalDuration {
    set hours(value) {
        this.setPropertyElementValue(OWLTimeHours, value)
    }

    get hours() {
        return this.getPropertyElementValue(OWLTimeHours)
    }

    set minutes(value) {
        this.setPropertyElementValue(OWLTimeMinutes, value)
    }

    get minutes() {
        return this.getPropertyElementValue(OWLTimeMinutes)
    }

    static get localName() {
        return GeneralDurationDescription.name
    }
}

export function GeneralDurationDescription(init) {
    return new OWLTimeGeneralDurationDescription(init)
}
