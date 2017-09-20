import { OWLTimeTemporalEntity } from './temporalentity'
import { OWLTimeInXSDDateTimeStamp } from './inxsddatetimestamp'

export class OWLTimeInstant extends OWLTimeTemporalEntity {
    set inXSDDateTimeStamp(value) {
        this.setPropertyElementValue(OWLTimeInXSDDateTimeStamp, value)
    }

    get inXSDDateTimeStamp() {
        return this.getPropertyElementValue(OWLTimeInXSDDateTimeStamp)
    }

    static get localName() {
        return Instant.name
    }
}

export function Instant(init) {
    return new OWLTimeInstant(init)
}
