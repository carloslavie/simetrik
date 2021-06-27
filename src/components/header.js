import React from 'react';

import Buscador from './buscador';
import { Link, Box, Text } from '@chakra-ui/react'

const Header = () => {

        
    return ( 
        <>
        <Box position="fixed" bg="#385898" width="full" textAlign="center" textColor="white" fontSize="xl" fontWeight="semibold">
            <Link href="#inicio" mx="4">Inicio</Link>
            <Link href="#usuarios" mx="4">Usuarios</Link>
            <Link href="#conciliaciones" mx="4">Conciliaciones</Link>
            <Link href="#fuentes" mx="4">Fuentes</Link>
            <Link href="#tableros" mx="4">Tableros</Link>
        </Box>
        <Text id="inicio" fontWeight="bold" fontSize="6xl" m="auto" textAlign="center" pt="20">Simetrik</Text>
        <Buscador/>
        </>
     );
}
 
export default Header;