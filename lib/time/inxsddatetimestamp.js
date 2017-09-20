import { XSD_DATE_TIME_STAMP_DATATYPE_URI } from './const'
import { OWLTimeElementAssembler } from './time'

export class OWLTimeInXSDDateTimeStamp extends OWLTimeElementAssembler {
    init(init) {
        this.datatype = XSD_DATE_TIME_STAMP_DATATYPE_URI
        super.init(init)
    }

    static get localName() {
        return inXSDDateTimeStamp.name
    }
}

export function inXSDDateTimeStamp(init) {
    return new OWLTimeInXSDDateTimeStamp(init)
}
