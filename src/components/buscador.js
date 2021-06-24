import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerResultadosApi } from '../reducers/buscadorReducer';
import Router from 'next/router';


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
        <form
            
            onSubmit={buscarProducto}
        >
            <input 
                type="text"
                placeholder="Buscar Productos"
                onChange={e => guardarBusqueda(e.target.value)}
            />

            <button
                type="submit"
            >Buscar</button>
        </form>
     );
}
 
export default Buscador;






