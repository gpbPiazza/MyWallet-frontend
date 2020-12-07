import React, { useEffect, useState} from 'react';
import dayjs from 'dayjs';

import { Container, Date, Description, Value } from '../../styles/TransactionStyles';
import Colors from '../../config/colors';

function Transaction({date, description, typeTransaction, value }) {
    const [formatDate, seteFormatDate] = useState('');
    const [color, setColor] = useState(false);

    useEffect(() => {
        seteFormatDate(dayjs(date).format('D/MM'))
        if(typeTransaction === 'deposit'){
            setColor(true);
        }
    }, [])


    
    return (       
        <Container >
            <Date>
                {formatDate}
            </Date>
            <Description>
                {description}
            </Description>
            <Value typeTransaction={color}>
                {value}
            </Value>
        </Container>        
    );
}

export default Transaction;
