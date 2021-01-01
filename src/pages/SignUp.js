import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ContentContainer from "../styles/ContentContainer";
import { Title, TextError, Text, Forms } from "../styles/SignInStyles";
import SignUpService from "../service/SignUpService";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const bodySingUp = {
      username,
      email,
      password,
      passwordConfirmation,
    };
    setWaiting(true);
    const data = await SignUpService.signUp(bodySingUp);
    setWaiting(false);
    if (data.success) {
      history.push(`/`);
    } else if (data.response.status !== 201) {
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
      <Forms>
        <Input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          error={error}
          onFocus={() => setError(false)}
        />
        {error && <TextError>{errorMessage}</TextError>}
        <Button
          onClick={(event) => onSubmit(event)}
          label="Submit"
          loading={waiting}
          disabled={waiting}
        />
      </Forms>
      <Text disable={waiting}>
        <Link to="/">Have account? Log-in!</Link>
      </Text>
    </ContentContainer>
  );
}
