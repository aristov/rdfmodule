import { RDFSDOMAssembler } from './assembler'

const LOCAL_NAME = 'ContainerMembershipProperty'

export class RDFSContainerMembershipProperty extends RDFSDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function ContainerMembershipProperty(init) {
    return new RDFSContainerMembershipProperty(init)
}
