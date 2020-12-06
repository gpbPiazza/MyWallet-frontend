import React from 'react';
import { IoMdLogOut } from "react-icons/io";
 
import Colors from '../config/colors';
import Spinner from './Spinner';
import { Text, Container} from '../styles/HeaderStyles';

export default function Header({ name, onClick, loading, showLogOut}) {

    return (
        <Container >
            <Text>
                {`Hello, ${name}`}
            </Text>
            {showLogOut && (
                loading ? 
                    <Spinner />
                    :
                    <IoMdLogOut 
                        color={Colors.white} 
                        fontSize='1.5rem'
                        cursor='pointer'
                        onClick={onClick}
                    />)
            }
        </Container>
    );
}
