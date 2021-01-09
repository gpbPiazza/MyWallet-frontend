import React from "react";

import { Container, Text, Value } from "../../styles/BalanceStyles";

function Balance({ balance }) {
  return (
    <Container>
      <Text>Saldo:</Text>
      <Value>{`$ ${balance}`}</Value>
    </Container>
  );
}

export default Balance;
