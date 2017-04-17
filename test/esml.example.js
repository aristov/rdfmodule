import { RDFDOMAssembler } from 'assembler'

const LOCAL_NAME = 'RDF'

export class RDFRDF extends RDFDOMAssembler {
    static get localName() {
        return LOCAL_NAME
    }
}

export function RDF(init) {
    return new RDFRDF(init)
}

```
<ecmascript 
    xmlns="http://aristov.github.io/esml"
    xmlns:var="http://aristov.github.io/esml/var"
    xmlns:const="http://aristov.github.io/esml/const"
    xmlns:class="http://aristov.github.io/esml/class"
    xmlns:get="http://aristov.github.io/esml/get"
    xmlns:function="http://aristov.github.io/esml/function">
    <import from="assembler"><var:RDFDOMAssembler/></import>
    <const:LOCAL_NAME>RDF</const:LOCAL_NAME>
    <export>
        <class:RDFRDF>
            <extends><var:RDFDOMAssembler/></extends>
            <static>
                <get:localName>
                    <return><const:LOCAL_NAME/></return>
                </get:localName>
            </static>
        </class:RDFRDF>
    </export>
    <export>
        <function:RDF>
            <arguments><var:init/></arguments>
            <return>
                <new><class:RDFRDF><var:init/></class:RDFRDF></new>
            </return>
        </function:RDF>
    </export>
</ecmascript>
```
