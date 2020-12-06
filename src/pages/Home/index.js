import React, { useState, useContext } from 'react';
import { Link, Redirect, useHistory} from 'react-router-dom';

import UserContext from '../../context/UserContext';
import LogOutService from '../../service/LogOutService';
import { ContentContainer } from '../../styles/ContentContainer';
import { TransactionBox, ButtonContainer } from '../../styles/HomeStyles';
import CashButton from './CashButton';
import Header from '../../components/Header';

export default function Home() {
    const { user, toHome, setToHome} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
  
    const logOut = async () => {
        setLoading(true);
        const data = await LogOutService.logOut(user.token);
        setLoading(false);
        if (data) {
            setToHome(true); 
        }else {
            alert('Something went wrong, we gonna redirect you to log in');
            setToHome(true);
        }
    };


    return (
        <ContentContainer>
            {toHome ? <Redirect to='/' /> : null}
            <Header name={user.username} showLogOut={true} loading={loading} onClick={() => logOut()} />

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
