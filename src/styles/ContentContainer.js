import styled from "styled-components";

import Colors from "../config/colors";

const ContentContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: ${Colors.purple};

  padding: 7%;
`;

export default ContentContainer;
