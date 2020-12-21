import React from "react";

import { Container, Text, Value } from "../../styles/BalanceStyles";

function Balance({ balance }) {
  return (
    <Container>
      <Text>Saldo:</Text>
      <Value>{`R$ ${balance}`}</Value>
    </Container>
  );
}

export default Balance;
