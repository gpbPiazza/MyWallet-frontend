import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import UserContext from "../context/UserContext";
import ContentContainer from "../styles/ContentContainer";
import { Title, TextError, Text } from "../styles/SignInStyles";
import Input from "../components/Input";
import Button from "../components/Button";
import SignInService from "../service/SignInService";
import AccountService from "../service/AccountService";

export default function SignIn() {
  const { user, setUser, toHome, setToHome } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (toHome) {
      setToHome(false);
      return setUser(null);
    }
    if (user) {
      history.push(`/home`);
    }
    return null;
  }, [user]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const body = { email, password };
    setWaiting(true);
    const data = await SignInService.signIn(body);
    setWaiting(false);

    if (data.success) {
      console.log(data.success);
      await AccountService.createAccount(data.success.token);
      setUser(data.success);
    } else if (data.response.status !== 202) {
      setError(true);
      setErrorMessage(data.response.data.error);
    } else {
      setError(true);
      setErrorMessage("Please Check you internet conexation");
    }
  };

  return (
    <ContentContainer>
      <Title>MyWallet</Title>
      <form>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setError(false)}
          error={error}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setError(false)}
          error={error}
        />
        {error && <TextError>{errorMessage}</TextError>}
        <Button
          onClick={(event) => onSubmit(event)}
          label="Login"
          disabled={waiting}
          loading={waiting}
        />
      </form>
      <Text disable={waiting}>
        <Link to="/signUp">First time MyWallet? Join us!</Link>
      </Text>
    </ContentContainer>
  );
}
