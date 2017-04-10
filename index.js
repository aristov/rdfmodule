const fs = require('fs')
const ttl = fs.readFileSync('src/rdf-schema.ttl', 'utf-8')

/*const N3 = require('n3')
const parser = N3.Parser()
const ttl = fs.readFileSync('src/22-rdf-syntax-ns.ttl', 'utf-8')
const arr = []
parser.parse(ttl,
    (error, triple, prefixes) => {
        if(triple) arr.push(
            `<${ triple.subject }>`, triple.object, triple.predicate
        )
        else console.log(arr, prefixes)
    })*/

const RDFS_NAMESPACE_URI = 'http://www.w3.org/2000/01/rdf-schema#'
const TURTLE_MIME_TYPE = 'text/turtle'
const RDFXML_MIME_TYPE = 'application/rdf+xml'

const rdflib = require('rdflib')
const store = rdflib.graph()
rdflib.parse(ttl, store, RDFS_NAMESPACE_URI, TURTLE_MIME_TYPE)
const cb = (...res) => console.log(res)
rdflib.serialize(store, new rdflib.IndexedFormula(), RDFS_NAMESPACE_URI, RDFXML_MIME_TYPE, cb)
