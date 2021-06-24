import React from 'react';
import { Tr, Td} from "@chakra-ui/react"

const ListadoTableros = ({resultT}) => {

    const {dashboardName, description, timestamp} = resultT;
    return ( 
        <>
        <Tr>
            <Td>{dashboardName}</Td>
            <Td>{description}</Td>
            <Td>{timestamp.createdAt}</Td>
            <Td>{timestamp.updateAt}</Td>            
        </Tr>        
        </>
     );
}
 
export default ListadoTableros;