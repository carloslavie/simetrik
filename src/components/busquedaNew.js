import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListadoBusquedaUsuarios from './tablasBusqueda/listadoBusquedaUsuarios';
import ListadoConciliaciones from './tablasBusqueda/listadoConciliaciones';
import ListadoFuentes from './tablasBusqueda/listadoFuentes';
import ListadoTableros from './tablasBusqueda/listadoTableros';
import { Box, Flex, Button, Stack, Radio, RadioGroup, Text, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react"


const BusquedaNew = ({q}) => {
    
    const {resultadoUsuarios, resultadoConciliaciones, resultadoFuentes, resultadoTableros} = useSelector(state => state.busqueda)
     
    //State para cerrar Tabla usuarios
    const [ open, setOpen ] = useState(true);
    const handleOpen = ()=>{
        if(open === true){
            setOpen(false)
        }else if(open === false){
            setOpen(true)
        }
    }
    //State para cerrar Tabla conciliaciones
    const [ openConc, setOpenConc ] = useState(true);
    const handleOpenConc = ()=>{
        if(openConc === true){
            setOpenConc(false)
        }else if(openConc === false){
            setOpenConc(true)
        }
    }
    //State para cerrar Tabla fuentes
    const [ openFuentes, setOpenFuentes ] = useState(true);
    const handleOpenFuentes = ()=>{
        if(openFuentes === true){
            setOpenFuentes(false)
        }else if(openFuentes === false){
            setOpenFuentes(true)
        }
    }
    //State para cerrar Tabla tableros
    const [ openTableros, setOpenTableros ] = useState(true);
    const handleOpenTableros = ()=>{
        if(openTableros === true){
            setOpenTableros(false)
        }else if(openTableros === false){
            setOpenTableros(true)
        }
    }

    //States para usuarios
    const [value, setValue] = useState("");
    const [ filtro, setFiltro ] = useState([]);
    const [ cargar, setCargar ] = useState(false);
    
    //States para conciliaciones
    const [valueConc, setValueConc ] = useState("");
    const [ cargarConc, setCargarConc ] = useState(false);
    const [ filtroConc, setFiltroConc ] = useState([]);

    //useeffect cambio state de busqueda
    useEffect(() => {
        
    }, [q])

    //Filtro para usuarios
    useEffect(() => {
        
        if(value === "1"){
            setCargar(true);
              const infoUsuarios = resultadoUsuarios.filter(res => {
                  return(
                      res.name.firstName.toLowerCase().includes(q.toLowerCase()) ||
                      res.name.lastName.toLowerCase().includes(q.toLowerCase()) 
                  )
              })
              setFiltro(infoUsuarios);
            console.log('aprestaste name')
        }else if(value === "2"){
            setCargar(true);
              const infoUsuarios = resultadoUsuarios.filter(res => {
                  return(
                      res.address.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltro(infoUsuarios);
            console.log('aprestaste adress')
        }else if(value === "3"){
            setCargar(true);
              const infoUsuarios = resultadoUsuarios.filter(res => {
                  return(
                      res.company.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltro(infoUsuarios);
            console.log('aprestaste company')
        }else if(value === "4"){
            setCargar(true);
              const infoUsuarios = resultadoUsuarios.filter(res => {
                  return(
                      res.email.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltro(infoUsuarios);
            console.log('aprestaste email')
        }else if(value === "5"){
            setCargar(true);
              const infoUsuarios = resultadoUsuarios.filter(res => {
                  return(
                      res.age == q
                  )
              })
              setFiltro(infoUsuarios);
            console.log('aprestaste age')
        }

    }, [value, q])

    //Filtro para Conciliaciones
    useEffect(() => {
        
        if(valueConc === "balance"){
            setCargarConc(true);
              const infoConciliaciones = resultadoConciliaciones.filter(res => {
                  return(
                    res.balance.toLowerCase().includes(q.toLowerCase())
                  )
              })
              setFiltroConc(infoConciliaciones);
            console.log('aprestaste balance')
        }else if(valueConc === "name"){
            setCargar(true);
              const infoConciliaciones = resultadoConciliaciones.filter(res => {
                  return(
                    res.conciliationName.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltroConc(infoConciliaciones);
            console.log('aprestaste concName')
        }else if(valueConc === "sourceA"){
            setCargar(true);
              const infoConciliaciones = resultadoConciliaciones.filter(res => {
                  return(
                    res.sourceA.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltroConc(infoConciliaciones);
            console.log('aprestaste source A')
        }else if(valueConc === "sourceB"){
            setCargar(true);
              const infoConciliaciones = resultadoConciliaciones.filter(res => {
                  return(
                    res.sourceB.toLowerCase().includes(q.toLowerCase())  
                  )
              })
              setFiltroConc(infoConciliaciones);
            console.log('aprestaste source B')
        }

    }, [valueConc, q])

    //RESULTADOS BUSQUEDA TABLA USUARIOS
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
    //RESULTADOS BUSQUEDA TABLA CONCILIACIONES
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
    //RESULTADOS BUSQUEDA TABLA FUENTES
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
    //RESULTADOS BUSQUEDA TABLA TABLEROS
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
    

    return ( 
        <>
        
        <Box mx="6">
            <Text id="usuarios" fontSize="2xl" fontWeight="semibold" my="2" ml="4">USUARIOS</Text>
            <Flex direction="row" alignItems="center" justify="space-between" m="4">

                <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                    <Radio value="1">name</Radio>
                    <Radio value="2">adress</Radio>
                    <Radio value="3">company</Radio>
                    <Radio value="4">email</Radio>
                    <Radio value="5">age</Radio>
                </Stack>
                </RadioGroup>

                {open? 
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpen}
                >
                    Ocultar Tabla
                </Button> :
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpen}
                >
                    Mostrar Tabla
                </Button>}
            </Flex>

            {open ? 
            (
                <Table variant="striped" colorScheme="facebook" mb="20">                
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

                ( newResultadoUsuarios.length === 0 & q.length > 0 ? <Box textAlign="center" width="100%" m="auto" fontSize="2xl" color="#385898" fontWeight="semibold">No existen coincidencias</Box> : q.length > 0 ?(
                newResultadoUsuarios.map(result => (
                    <ListadoBusquedaUsuarios
                        key={result._id}
                        result={result}                    
                    />
                ))
            ) : null)
            }
                    
                </Tbody>            
            </Table>
            ): null}

            <hr/>

            <Text id="conciliaciones" fontSize="2xl" fontWeight="semibold" my="2" ml="4">CONCILIACIONES</Text>

            <Flex direction="row" alignItems="center" justify="space-between" m="4">

                <RadioGroup onChange={setValueConc} value={valueConc}>
                    <Stack direction="row">
                        <Radio value="balance">balance</Radio>
                        <Radio value="name">conciliation name</Radio>
                        <Radio value="sourceA">source A</Radio>
                        <Radio value="sourceB">source B</Radio>
                    </Stack>
                </RadioGroup>

                {openConc ? 
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenConc}
                >
                    Ocultar Tabla
                </Button> :
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenConc}
                >
                    Mostrar Tabla
                </Button>
                }

            </Flex>

            {openConc ? (
                <Table variant="striped" colorScheme="facebook" mb="20">
                
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
                    {  cargarConc ? 
                    ( filtroConc.map(resultC => (
                            <ListadoConciliaciones
                                key={resultC._id}
                                resultC={resultC}                    
                            />
                            )) ) :

                    ( newResultadoConciliaciones.length === 0 & q.length > 0 ? <Box textAlign="center" width="100%" m="auto" fontSize="2xl" color="#385898" fontWeight="semibold">No existen coincidencias</Box> : q.length > 0 ? (
                        newResultadoConciliaciones.map(resultC => (
                            <ListadoConciliaciones
                                key={resultC._id}
                                resultC={resultC}                    
                            />
                    ))
                ) : null)
                }
                </Tbody>            
            </Table>
            ) : null }

            <hr/>

            <Flex direction="row" alignItems="center" justify="space-between" m="4">
                <Text id="fuentes" fontSize="2xl" fontWeight="semibold" my="2" ml="4">FUENTES</Text>

                {openFuentes ? 
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenFuentes}
                >
                    Ocultar Tabla
                </Button> :
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenFuentes}
                >
                    Mostrar Tabla
                </Button>
                }

            </Flex>

            {openFuentes ? (
                <Table variant="striped" colorScheme="facebook" mb="20">
                
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
            ) : null}

            <hr/>

            <Flex direction="row" alignItems="center" justify="space-between" m="4">
            <Text id="tableros" fontSize="2xl" fontWeight="semibold" my="2" ml="4">TABLEROS</Text>

            {openTableros ? 
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenTableros}
                >
                    Ocultar Tabla
                </Button> :
                <Button colorScheme="facebook" size="sm"
                onClick={handleOpenTableros}
                >
                    Mostrar Tabla
                </Button>
            }
            </Flex>

            {openTableros ? (
            <Table variant="striped" colorScheme="facebook" mb="20">
                
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
            ): null}
            
        </Box>
        </>
     );
}
 
export default BusquedaNew;