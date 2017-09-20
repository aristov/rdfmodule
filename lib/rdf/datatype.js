import { RDFSClass } from './class'

const LOCAL_NAME = 'Datatype'

export class RDFSDatatype extends RDFSClass {
    static get localName() {
        return LOCAL_NAME
    }
}

export function Datatype(init) {
    return new RDFSDatatype(init)
}

