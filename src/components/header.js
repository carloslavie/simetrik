import React from 'react';
import {Text} from '@chakra-ui/react'
import Buscador from './buscador';

const Header = () => {
    return ( 
        <>
        <Text fontWeight="bold" fontSize="6xl" m="auto" textAlign="center">Simetrik</Text>
        <Buscador/>
        </>
     );
}
 
export default Header;