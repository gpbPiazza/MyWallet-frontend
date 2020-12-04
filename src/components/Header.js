import React from 'react';
import { IoMdLogOut } from "react-icons/io";

import Colors from '../config/colors';
import { Text, Container} from '../styles/HeaderStyles';

export default function Header({ name, onClick }) {

    return (
        <Container >
            <Text>
                {`Hello, ${name}`}
            </Text>

            <IoMdLogOut 
                 color={Colors.white} 
                 fontSize='1.5rem'
                 cursor='pointer'
                 onClick={onClick}/>
        </Container>
    );
}
