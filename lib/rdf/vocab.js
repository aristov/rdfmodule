import * as rdfmodule from './index'

const storage = {}

const handler = (res, item) => {
    const { IRI } = item
    if(IRI) res[IRI] = item
    return res
}

export default Object.values(rdfmodule).reduce(handler, storage)
