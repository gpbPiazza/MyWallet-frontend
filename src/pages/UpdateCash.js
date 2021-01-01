import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import UserContext from "../context/UserContext";
import ContentContainer from "../styles/ContentContainer";
import AccountService from "../service/AccountService";
import Button from "../components/Button";
import Input from "../components/Input";
import { Title, DescriptionArea } from "../styles/UpDateCashStyles";
import { Forms } from "../styles/SignInStyles";
import ModalSuccess from "../components/ModalSuccess";

export default function UpdateCash() {
  const { user } = useContext(UserContext);
  const { typeTransaction } = useParams();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const body = {
      value,
      description,
      typeTransaction,
    };

    setLoading(!loading);
    const data = await AccountService.updateBalance(body, user.token);
    setLoading(!loading);
    if (data) {
      setSuccess(true);
    }
  };

  return (
    <ContentContainer>
      <Title>
        {typeTransaction === "deposit" ? "New deposit" : "New withdrawal"}
      </Title>
      <Forms>
        <Input
          type="number"
          placeholder="Value"
          value={value}
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
    </ContentContainer>
  );
}
