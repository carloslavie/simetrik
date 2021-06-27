import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerResultadosApi } from '../reducers/buscadorReducer';
import { Box, Container, Input, Button } from '@chakra-ui/react';
import BusquedaNew from './busquedaNew';


const Buscador = () => {

    
    const [ q, guardarBusqueda ] = useState('');
    const [ error, setError ] = useState(false)
    const dispatch = useDispatch()

    const buscarProducto = e =>{
        e.preventDefault();

        if(q.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false);                
            }, 2000);
            return;
        }
        

        dispatch(obtenerResultadosApi());
        
    }
    
    return ( 
        <>
        <Container maxW="container.md" mb="20">
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
        {error && 
        <Box 
            fontSize="1xl" 
            textColor="white" 
            textAlign="center" 
            bg="red" 
            borderRadius="5"
            boxShadow="md"
            mt="2"
            >El campo busqueda no puede estar vacio</Box>
}
        </Container>
        
        <BusquedaNew
            q={q}
        />
        </>
     );
}
 
export default Buscador;






