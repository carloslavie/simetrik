import React from 'react';
import { Tr, Td} from "@chakra-ui/react"

const ListadoConciliaciones = ({resultC}) => {

    const {balance, conciliationName, description, sourceA, sourceB, timestamp} = resultC;
    return ( 
        <>
        <Tr>
            <Td>{balance}</Td>
            <Td>{conciliationName}</Td>
            <Td>{description}</Td>
            <Td>{sourceA}</Td>
            <Td>{sourceB}</Td>
            <Td>{timestamp.createdAt}</Td>
            <Td>{timestamp.updateAt}</Td>            
        </Tr>        
        </>
     );
}
 
export default ListadoConciliaciones;