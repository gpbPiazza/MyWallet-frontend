/* eslint-disable react/no-array-index-key */
import React, { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import UserContext from "../../context/UserContext";
import LogOutService from "../../service/LogOutService";
import ContentContainer from "../../styles/ContentContainer";
import { TransactionBox, ButtonContainer } from "../../styles/HomeStyles";
import CashButton from "./CashButton";
import Header from "../../components/Header";
import Transaction from "./Transaction";
import Spinner from "../../components/Spinner";
import Balance from "./Balance";
import AccountService from "../../service/AccountService";
import { TextError } from "../../styles/SignInStyles";

export default function Home() {
  const { user, toHome, setToHome } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("");
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [cashButtonsDisabled, setCashButtonsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const getHistoryTransactions = async () => {
    setLoadingTransactions(true);
    const data = await AccountService.getTransactions(user.token, user.id);
    setLoadingTransactions(false);
    if (data) {
      setTransactions(data);
    } else {
      setCashButtonsDisabled(true);
      setError(true);
      setErrorMessage(
        "Something went wrong, please, we suggest you to log-out!"
      );
    }
  };

  const getBalance = async () => {
    const data = await AccountService.getBalance(user.token);
    if (data) {
      const formatBalance = parseInt(data.balance, 10).toFixed(2);
      setBalance(formatBalance);
    }
  };

  useEffect(() => {
    getHistoryTransactions();
    getBalance();
  }, []);

  const logOut = async () => {
    setLoading(true);
    const data = await LogOutService.logOut(user.token);
    setLoading(false);
    if (data) {
      setToHome(true);
    } else {
      setToHome(true);
    }
  };

  return (
    <ContentContainer>
      {error && <TextError>{errorMessage}</TextError>}
      {toHome ? <Redirect to="/" /> : null}
      <Header
        name={user.username}
        showLogOut
        loading={loading}
        onClick={() => logOut()}
      />
      <TransactionBox>
        {loadingTransactions ? (
          <Spinner transaction />
        ) : (
          transactions.map((transaction, index) => (
            <Transaction
              key={index}
              date={transaction.dateTransaction}
              typeTransaction={transaction.typeTransaction}
              description={transaction.description}
              value={transaction.value}
            />
          ))
        )}
      </TransactionBox>
      <Balance balance={balance} />

      <ButtonContainer>
        <CashButton
          showPlusButton
          disabled={cashButtonsDisabled}
          label="Cash inflow"
          onClick={() => history.push(`/upDateCash/deposit`)}
          loading={false}
        />

        <CashButton
          marginLeft="5%"
          showPlusButton={false}
          disabled={cashButtonsDisabled}
          label="Cash outflow"
          onClick={() => history.push(`/upDateCash/withdrawal`)}
          loading={false}
        />
      </ButtonContainer>
    </ContentContainer>
  );
}
