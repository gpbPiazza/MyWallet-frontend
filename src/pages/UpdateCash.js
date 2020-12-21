import React from "react";
import { useParams } from "react-router-dom";

// import UserContext from "../context/UserContext";
import ContentContainer from "../styles/ContentContainer";
// import Button from "../components/Button";
import Input from "../components/Input";
import { Title } from "../styles/UpDateCashStyles";

export default function UpdateCash() {
  const { typeTransaction } = useParams();
  return (
    <ContentContainer>
      <Title>
        {typeTransaction === "deposit" ? "New deposit" : "New withdrawal"}
      </Title>
      <Input
        type="numeric"
        placeholder="Value"
        // value={email}
        // onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Description"
        // value={'aa'}
        // onChange={(event) => setPassword(event.target.value)}
      />
    </ContentContainer>
  );
}
