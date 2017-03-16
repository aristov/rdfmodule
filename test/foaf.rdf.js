import { RDF } from '../lib'
import {
    Person, Organization,
    name, birthday, gender, homepage,
    weblog, mbox, phone
} from './foafmodule'

export default RDF([
    Person([
        name('Vyacheslav Aristov'),
        birthday('1986-12-07'),
        gender('male'),
        phone({ resource : 'tel:+7-903-730-7615' }),
        mbox({ resource : 'mailto:vv.aristov@gmail.com' }),
        homepage({ resource : 'http://github.com/aristov' }),
        weblog({ resource : 'http://aristov.livejournal.com' }),
    ]),
    Organization([
        name('Fusion studio'),
        phone({ resource : 'tel:+7-926-602-2587' }),
        homepage({ resource : 'http://fusion1905.ru' }),
    ]),
])
