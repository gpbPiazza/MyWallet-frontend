import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
import { ContentContainer } from '../styles/ContentContainer';
import { TransactionBox } from '../styles/HomeStyles';
import Header from '../components/Header';
import Button from '../components/Button';

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
                <Transactions />
            </TransactionBox>
            <div>    
            {disabled, label, onClick, loading}
                <Button 
                disabled={false}
                label={'Cash inflow'}
                onClick={() => console.log('ai ai soma!')}
                loading={false}

                />

                <Button />
            </div>
        </ContentContainer>
    );
}
