import React from 'react';
import { Tr, Td} from "@chakra-ui/react"

const ListadoBusquedaUsuarios = ({result}) => {

    const { _id, address, age, company, createdAt, email, gender, name, phone} = result;
    return ( 
        <>
        <Tr>
            <Td>{name.firstName}</Td>
            <Td>{name.lastName}</Td>
            <Td>{age}</Td>
            <Td>{gender}</Td>
            <Td>{address}</Td>
            <Td>{email}</Td>
            <Td>{phone}</Td>
            <Td>{company}</Td>
            <Td>{createdAt}</Td>
            
        </Tr>        
        </>
     );
}
 
export default ListadoBusquedaUsuarios;