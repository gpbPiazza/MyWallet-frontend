import React from 'react';

import { Container, Text } from '../styles/ButtonStyles';
import Spinner from './Spinner';

function Button({
  disabled, label, onClick, loading,
}) {
  return (
    <div>
      <Container
        onClick={onClick}
        disabled={disabled}
      >
        {loading
          ? <Spinner />
          : (
            <Text>
              {label}
            </Text>
          )}
      </Container>
    </div>
  );
}

export default Button;
