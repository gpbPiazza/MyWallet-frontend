import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect, useHistory} from 'react-router-dom';

import UserContext from '../../context/UserContext';
import LogOutService from '../../service/LogOutService';
import { ContentContainer } from '../../styles/ContentContainer';
import { TransactionBox, ButtonContainer } from '../../styles/HomeStyles';
import CashButton from './CashButton';
import Header from '../../components/Header';
import Transaction from './Transaction';
import Balance from './Balance';
import AccountService from '../../service/AccountService';

export default function Home() {
    const { user, toHome, setToHome} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState('');
    const [loadingTransactions, setLoadingTransactions] = useState(false);

    useEffect(() => {
        getHistoryTransactions();
        getBalance();
    }, [])

    const getHistoryTransactions = async () => {
        setLoadingTransactions(true);
        const data = await AccountService.getTransactions(user.token, user.id);
        setLoadingTransactions(false);
        if (data) {
            setTransactions(data) 
        }else {
            alert('Something went wrong, we gonna redirect you to log in');
            setToHome(true);
        }
    }

    const getBalance = async () => {
        const data = await AccountService.getBalance(user.token);
        if (data) {
            const formatBalance = parseInt(data.balance).toFixed(2)
            setBalance(formatBalance) 
        }else {
            alert('Something went wrong, we gonna redirect you to log in');
            setToHome(true);
        }
    }

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
                {transactions.map((transaction, index) => 
                    <Transaction 
                        key={index}
                        date={transaction.dateTransaction}
                        typeTransaction={transaction.typeTransaction}
                        description={transaction.description}
                        value={transaction.value} 
                    />)
                } 
            </TransactionBox>
            <Balance balance={balance}/>

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
