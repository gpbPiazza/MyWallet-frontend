import React from 'react';

import { Container, Text } from '../styles/ButtonStyles';
import Spinner from './Spinner'

function Button({able, label, onClick, loading}) {
    return (
        <div>
            <Container 
                onClick={onClick}
                disabled={able}
            >
            {loading ? 
                <Spinner /> 
                : 
                <Text>
                    {label}
                </Text>
            }
            </Container>        
        </div>
    );
}

export default Button;
