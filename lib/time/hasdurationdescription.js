import { OWLTimeElementAssembler } from './time'

export class OWLTimeHasDurationDescription extends OWLTimeElementAssembler {
    static get localName() {
        return hasDurationDescription.name
    }
}

export function hasDurationDescription(init) {
    return new OWLTimeHasDurationDescription(init)
}
