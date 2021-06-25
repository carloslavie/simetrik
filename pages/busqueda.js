import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ListadoBusquedaUsuarios from '../src/components/tablasBusqueda/listadoBusquedaUsuarios';
import ListadoConciliaciones from '../src/components/tablasBusqueda/listadoConciliaciones';
import ListadoFuentes from '../src/components/tablasBusqueda/listadoFuentes';
import ListadoTableros from '../src/components/tablasBusqueda/listadoTableros';
import { Stack, Radio, RadioGroup, Text, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react"


const Busqueda = () => {
    
    const router = useRouter();
  console.log(router);
  const { query: { q } } = router;
  console.log(q);

    // const resultadoUsers = useSelector(state => state.busqueda.resultadoUsuarios)
    // console.log(resultado);
    const {resultadoUsuarios, resultadoConciliaciones, resultadoFuentes, resultadoTableros} = useSelector(state => state.busqueda)
    
    // console.log(resultadoTableros[0].visuals[0])

    const [value, setValue] = useState("");
    const [ filtro, setFiltro ] = useState([]);
    const [ cargar, setCargar ] = useState(false);

    // if(value === "1"){
    //      const infoUsuarios = resultadoUsuarios.filter(res => {
    //          return(
    //              res.name.firstName.toLowerCase().includes(q.toLowerCase()) ||
    //              res.name.lastName.toLowerCase().includes(q.toLowerCase()) 
    //          )
    //      })
    //      setFiltro(infoUsuarios);
    //      setCargar(true);
        
    // }

    const newResultadoUsuarios = resultadoUsuarios.filter(result => {
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
            result.phone.toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[0].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[1].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[2].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[3].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[4].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[5].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[6].toLowerCase().includes(q.toLowerCase())   
        )
    } )
    const newResultadoConciliaciones = resultadoConciliaciones.filter(result => {
        return(
            result.balance.toLowerCase().includes(q.toLowerCase()) ||
            result.conciliationName.toLowerCase().includes(q.toLowerCase()) ||
            result.description.toLowerCase().includes(q.toLowerCase()) ||
            result.sourceA.toLowerCase().includes(q.toLowerCase()) ||
            result.sourceB.toLowerCase().includes(q.toLowerCase()) ||
            result.timestamp.createdAt.toLowerCase().includes(q.toLowerCase()) ||
            result.timestamp.updateAt.toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[0].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[1].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[2].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[3].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[4].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[5].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[6].toLowerCase().includes(q.toLowerCase())            
        )
    } )
    const newResultadoFuentes = resultadoFuentes.filter(result => {
        return(
            result.company.toLowerCase().includes(q.toLowerCase()) ||
            result.description.toLowerCase().includes(q.toLowerCase()) ||
            result.isActive == q ||
            result.name.toLowerCase().includes(q.toLowerCase()) ||
            result.timestamp.createdAt.toLowerCase().includes(q.toLowerCase()) ||
            result.timestamp.updateAt.toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[0].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[1].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[2].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[3].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[4].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[5].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[6].toLowerCase().includes(q.toLowerCase())   
        )
    } )
    const newResultadoTableros = resultadoTableros.filter((result, index) => {
        return(
            result.dashboardName.toLowerCase().includes(q.toLowerCase()) ||
            result.description.toLowerCase().includes(q.toLowerCase()) ||
            result.isActive == q ||
            result.timestamp.createdAt.toLowerCase().includes(q.toLowerCase()) ||
            result.timestamp.updateAt.toLowerCase().includes(q.toLowerCase()) ||
            result.visualType[0].name.toLowerCase().includes(q.toLowerCase()) ||
            result.visualType[1].name.toLowerCase().includes(q.toLowerCase()) ||
            result.visuals[0].name.toLowerCase().includes(q.toLowerCase()) ||
            result.visuals[0].type.toLowerCase().includes(q.toLowerCase()) ||
            result.visuals[1].name.toLowerCase().includes(q.toLowerCase()) ||
            result.visuals[1].type.toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[0].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[1].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[2].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[3].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[4].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[5].toLowerCase().includes(q.toLowerCase()) ||           
            result.tags[6].toLowerCase().includes(q.toLowerCase())   
            // result.visuals[2].name.toLowerCase().includes(q.toLowerCase()) ||
            // result.visuals[2].type.toLowerCase().includes(q.toLowerCase()) ||
            // result.visuals[3].name.toLowerCase().includes(q.toLowerCase()) ||
            // result.visuals[3].type.toLowerCase().includes(q.toLowerCase())            

        )
    } )
    //  console.log(newResultado)    


    return ( 
        <>
<RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">name</Radio>
        <Radio value="2">adress</Radio>
        <Radio value="3">company</Radio>
      </Stack>
    </RadioGroup>

        <Text fontSize="2xl" fontWeight="semibold" my="2" ml="2">USUARIOS</Text>

        <Table variant="striped" colorScheme="facebook">
            
            <Thead >
                <Tr >
                <Th textAlign="center">First Name</Th>
                <Th textAlign="center">Last Name</Th>
                <Th textAlign="center">Age</Th>
                <Th textAlign="center">Gender</Th>
                <Th textAlign="center">Address</Th>
                <Th textAlign="center">Email</Th>
                <Th textAlign="center">Phone Number</Th>
                <Th textAlign="center">Company</Th>
                <Th textAlign="center">Created at</Th>
                {/* <Th isNumeric>multiply by</Th> */}
                </Tr>
            </Thead>
            <Tbody>
                {  cargar ? 
               ( filtro.map(result => (
                        <ListadoBusquedaUsuarios
                            key={result._id}
                            result={result}                    
                        />
                    )) ) :

               ( newResultadoUsuarios.length === 0 ? 'No existen resultados que mostrar' : (
            newResultadoUsuarios.map(result => (
                <ListadoBusquedaUsuarios
                    key={result._id}
                    result={result}                    
                />
            ))
        ))
        }
                {/* { newResultadoUsuarios.length === 0 ? 'No existen resultados que mostrar' : (
            newResultadoUsuarios.map(result => (
                <ListadoBusquedaUsuarios
                    key={result._id}
                    result={result}                    
                />
            ))
        )} */}
            </Tbody>            
        </Table>

        <Text fontSize="2xl" fontWeight="semibold" my="2" ml="2">CONCILIACIONES</Text>

        <Table variant="striped" colorScheme="facebook">
            
            <Thead >
                <Tr >
                <Th textAlign="center">Balance</Th>
                <Th textAlign="center">Conciliation Name</Th>
                <Th textAlign="center">Description</Th>
                <Th textAlign="center">Source A</Th>
                <Th textAlign="center">Source B</Th>
                <Th textAlign="center">Created at</Th>
                <Th textAlign="center">Update at</Th>
                </Tr>
            </Thead>
            <Tbody>
                { newResultadoConciliaciones.length === 0 ? null : (
            newResultadoConciliaciones.map(resultC => (
                <ListadoConciliaciones
                    key={resultC._id}
                    resultC={resultC}                    
                />
            ))
        )}
            </Tbody>            
        </Table>

        <Text fontSize="2xl" fontWeight="semibold" my="2" ml="2">FUENTES</Text>

        <Table variant="striped" colorScheme="facebook">
            
            <Thead >
                <Tr >
                <Th textAlign="center">Name</Th>
                <Th textAlign="center">Company</Th>
                <Th textAlign="center">Description</Th>
                <Th textAlign="center">Created at</Th>
                <Th textAlign="center">Update at</Th>
                </Tr>
            </Thead>
            <Tbody>
                { newResultadoFuentes.length === 0 ? null : (
            newResultadoFuentes.map(resultF => (
                <ListadoFuentes
                    key={resultF._id}
                    resultF={resultF}                    
                />
            ))
        )}
            </Tbody>            
        </Table>

        <Text fontSize="2xl" fontWeight="semibold" my="2" ml="2">TABLEROS</Text>

<Table variant="striped" colorScheme="facebook">
    
    <Thead >
        <Tr >
        <Th textAlign="center">DashboardName</Th>
        <Th textAlign="center">Description</Th>
        <Th textAlign="center">Created at</Th>
        <Th textAlign="center">Update at</Th>
        </Tr>
    </Thead>
    <Tbody>
        { newResultadoTableros.length === 0 ? null : (
    newResultadoTableros.map(resultT => (
        <ListadoTableros
            key={resultT._id}
            resultT={resultT}                    
        />
    ))
)}
    </Tbody>            
</Table>
        


        </>
     );
}
 
export default Busqueda;