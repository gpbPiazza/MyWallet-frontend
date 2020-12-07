import React from 'react';

import { Container, Date, Description, Value } from '../../styles/TransactionStyles';
import Colors from '../../config/colors';

function Transaction({date, description, typeTransaction, value }) {
    return (       
        <Container >
            <Date>
                30/11
            </Date>
            <Description>
                Almoço com a mãe
            </Description>
            <Value typeTransaction={typeTransaction}>
                99,99
            </Value>
        </Container>        
    );
}

export default Transaction;
