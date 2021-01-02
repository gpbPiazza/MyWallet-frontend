import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import UserContext from "../context/UserContext";
import ContentContainer from "../styles/ContentContainer";
import AccountService from "../service/AccountService";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title, DescriptionArea, Container } from "../styles/UpDateCashStyles";
import { Forms, TextError } from "../styles/SignInStyles";
import ModalSuccess from "../components/ModalSuccess";
import Colors from "../config/colors";

export default function UpdateCash() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { typeTransaction } = useParams();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    const body = {
      value: parseFloat(value).toFixed(2),
      description,
      typeTransaction,
    };

    setLoading(true);
    const data = await AccountService.updateBalance(body, user.token);
    setLoading(false);
    if (data?.userId) {
      return setSuccess(true);
    }
    if (data.response.status === 401) {
      setError(true);
      return setErrorMessage(data.response.data.error);
    }
    if (data.response.status === 400) {
      setError(true);
      return setErrorMessage(data.response.data.error);
    }
    setError(true);
    return setErrorMessage("Please verify your internet conexation");
  };

  return (
    <ContentContainer>
      <Container>
        <IoMdArrowRoundBack
          color={Colors.white}
          fontSize="1.5rem"
          cursor="pointer"
          onClick={() => history.push("/home")}
        />
        <Title>
          {typeTransaction === "deposit" ? "New deposit" : "New withdrawal"}
        </Title>
      </Container>
      <Forms>
        <Input
          type="number"
          placeholder="Value"
          value={value}
          step="0.01"
          pattern="[0-9]+([\.,][0-9]+)?"
          onChange={(event) => setValue(event.target.value)}
        />
        <DescriptionArea
          type="text"
          placeholder="Description"
          value={description}
          maxLength="25"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          onClick={(event) => onSubmit(event)}
          label="Submit"
          loading={loading}
          disabled={loading}
        />
      </Forms>
      <ModalSuccess modalIsOpen={success} />
      {error && <TextError>{errorMessage}</TextError>}
    </ContentContainer>
  );
}
