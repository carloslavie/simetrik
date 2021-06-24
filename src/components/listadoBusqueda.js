import React from 'react';

const ListadoBusqueda = ({result}) => {

    const { _id, address, age, company, createdAt, email, gender, name} = result;
    return ( 
        <>
        <p>nombre:{name.firstName}</p>
        <p>apellido:{name.lastName}</p>
        <p>id:{_id}</p>
        <p>direccion:{address}</p>
        <p>edad:{age}</p>
        <p>empresa:{company}</p>
        <p>email:{email}</p>
        </>
     );
}
 
export default ListadoBusqueda;