import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ListadoBusqueda from '../src/components/listadoBusqueda';

const Busqueda = () => {
    
    const router = useRouter();
  console.log(router);
  const { query: { q } } = router;
  console.log(q);

    // const resultadoUsers = useSelector(state => state.busqueda.resultadoUsuarios)
    // console.log(resultado);
    const {resultadoUsuarios, resultadoConciliaciones, resultadoFuentes, resultadoTableros} = useSelector(state => state.busqueda)
    

     const newResultado = resultadoUsuarios.filter(result => {
         return(
             result._id.toLowerCase().includes(q.toLowerCase()) ||
             result.address.toLowerCase().includes(q.toLowerCase()) ||
             result.age == q ||
             result.company.toLowerCase().includes(q.toLowerCase()) ||
             result.createdAt.toLowerCase().includes(q.toLowerCase()) ||
             result.email.toLowerCase().includes(q.toLowerCase()) ||
             result.gender.toLowerCase().includes(q.toLowerCase()) ||
             result.name.firstName.toLowerCase().includes(q.toLowerCase()) ||
             result.name.lastName.toLowerCase().includes(q.toLowerCase()) ||
             result.phone.toLowerCase().includes(q.toLowerCase())

         )
     } )
     console.log(newResultado)

    


    return ( 
        <>
        <h1>Resultados de la busqueda</h1>

        
        { newResultado.length === 0 ? 'No existen resultados que mostrar' : (
            newResultado.map(result => (
                <ListadoBusqueda
                    key={result._id}
                    result={result}
                    
                />
            ))
        )}


        </>
     );
}
 
export default Busqueda;