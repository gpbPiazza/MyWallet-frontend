import React from 'react';

import { ContentButton } from '../styles/ButtonStyles';

function Button({able, label, onClick}) {
    return (
        <div>
            <ContentButton 
                onClick={onClick}
                disabled={able}
            >
                {label}
            </ContentButton>        
        </div>
    );
}

export default Button;
