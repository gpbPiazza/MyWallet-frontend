import React from 'react';
import { IoMdLogOut } from "react-icons/io";

import { Container, Text } from '../../styles/CashButtonStyles';

function CashButton({disabled, label, onClick, loading}) {
    return (
        <div>
            <Container 
                onClick={onClick}
                disabled={disabled}
            >
            <IoMdLogOut 
                color={Colors.white} 
                fontSize='1.5rem'
                cursor='pointer'
            />
            <Text>
                {label}
            </Text>
            </Container>        
        </div>
    );
}

export default CashButton;
