import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory} from 'react-router-dom';

import UserContext from '../../context/UserContext';
import { ContentContainer } from '../../styles/ContentContainer';
import { TransactionBox, ButtonContainer } from '../../styles/HomeStyles';
import CashButton from './CashButton';
import Header from '../../components/Header';

export default function Home() {
    const { user } = useContext(UserContext);
    const history = useHistory();
  
    useEffect(() => {
        if (user) {
            history.push(`/home`);
        }
      }, [user]);



    return (
        <ContentContainer>
            <Header name={user.username} onClick={() => console.log('zip zop')} />

            <TransactionBox>
                {/* <Transactions /> */}
            </TransactionBox>

            <ButtonContainer>  
                <CashButton 
                showPlusButton={true}
                disabled={false}
                label={'Cash inflow'}
                onClick={() => console.log('ai ai soma!')}
                loading={false}
                />

                <CashButton  
                marginLeft={'5%'}
                showPlusButton={false}
                disabled={false}
                label={'Cash outflow'}
                onClick={() => console.log('ai ai tira!')}
                loading={false} 
                />
            </ButtonContainer>
            
        </ContentContainer>
    );
}
