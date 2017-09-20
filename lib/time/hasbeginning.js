import { OWLTimeElementAssembler } from './time'

export class OWLTimeHasBeginning extends OWLTimeElementAssembler {
    static get localName() {
        return hasBeginning.name
    }
}

export function hasBeginning(init) {
    return new OWLTimeHasBeginning(init)
}
