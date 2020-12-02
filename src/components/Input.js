import React from 'react';

import { ContentInput, Container} from '../styles/InputStyles';

export default function Input({value, type, placeholder, onChange, errorMessage, error}) {

    return (
        <Container >
            <ContentInput 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                error={error}
               
            />
        </Container>
    );
}
