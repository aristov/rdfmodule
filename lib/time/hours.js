import { XSD_DECIMAL_DATATYPE_URI } from './const'
import { OWLTimeElementAssembler } from './time'

export class OWLTimeHours extends OWLTimeElementAssembler {
    /**
     * @param {*} init
     */
    init(init) {
        this.datatype = XSD_DECIMAL_DATATYPE_URI
        if(typeof init === 'number') this.value = init
        else return super.init(init)
        return this.node
    }

    /**
     * @param {Number} value
     */
    set value(value) {
        this.textContent = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.textContent)
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return hours.name
    }
}

/**
 * @param {*} init
 * @returns {OWLTimeHours}
 */
export function hours(init) {
    return new OWLTimeHours(init)
}
