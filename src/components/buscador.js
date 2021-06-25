import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerResultadosApi } from '../reducers/buscadorReducer';
import Router from 'next/router';
import { Container, Input, Button } from '@chakra-ui/react';


const Buscador = () => {

    
    const [ busqueda, guardarBusqueda ] = useState('');
    const dispatch = useDispatch()

    const buscarProducto = e =>{
        e.preventDefault();

        // if(busqueda.trim() === '') return;
        console.log("buscando")
        dispatch(obtenerResultadosApi());
        Router.push({
            pathname: '/busqueda',
            query: { q : busqueda }
        })

    }
    
    return ( 
        <Container maxW="container.md">
        <form
            
            onSubmit={buscarProducto}
        >
            <Input 
                type="text"
                placeholder="Ingrese su busqueda..."
                onChange={e => guardarBusqueda(e.target.value)}
            />

            <Button width="100%" colorScheme="facebook" mt="2"
                type="submit"
            >Buscar</Button>
        </form>
        </Container>
     );
}
 
export default Buscador;






