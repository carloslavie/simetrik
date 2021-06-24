import React from 'react';
import { Tr, Td} from "@chakra-ui/react"

const ListadoFuentes = ({resultF}) => {

    const {company, description, name, timestamp} = resultF;
    return ( 
        <>
        <Tr>
            <Td>{company}</Td>
            <Td>{description}</Td>
            <Td>{name}</Td>
            <Td>{timestamp.createdAt}</Td>
            <Td>{timestamp.updateAt}</Td>            
        </Tr>        
        </>
     );
}
 
export default ListadoFuentes;