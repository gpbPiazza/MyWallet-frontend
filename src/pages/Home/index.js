import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { useUserContext } from '../../context/UserContext';
import { ContentContainer } from '../../styles/ContentContainer';
import { TransactionBox, ButtonContainer } from '../../styles/HomeStyles';
import CashButton from './CashButton';
import Header from '../../components/Header';
import Button from '../../components/Button';

export default function Home() {
    const { user, setUser } = useUserContext();
    const history = useHistory();
  
    useEffect(() => {
        if (user) {
            history.push(`/home`);
        }
      }, [user]);



    return (
        <ContentContainer>
            <Header name={'aai ai zape'} onClick={() => console.log('zip zop')} />

            <TransactionBox>
                {/* <Transactions /> */}
            </TransactionBox>

            <ButtonContainer>  
                <CashButton 
                disabled={false}
                label={'Cash inflow'}
                onClick={() => console.log('ai ai soma!')}
                loading={false}
                />

                <CashButton  
                disabled={false}
                label={'Cash outflow'}
                onClick={() => console.log('ai ai tira!')}
                loading={false} 
                />
            </ButtonContainer>
            
        </ContentContainer>
    );
}
