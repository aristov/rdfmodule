import { OWLTimeElementAssembler } from './time'

export class OWLTimeTemporalEntity extends OWLTimeElementAssembler {
    static get localName() {
        return TemporalEntity.name
    }
}

export function TemporalEntity(init) {
    return new OWLTimeTemporalEntity(init)
}
