import React from 'react';
import {Text} from '@chakra-ui/react'
import Buscador from './buscador';

const Header = () => {
    return ( 
        <>
        <Text fontWeight="bold" fontSize="4xl">Simetrik</Text>
        <Buscador/>
        </>
     );
}
 
export default Header;