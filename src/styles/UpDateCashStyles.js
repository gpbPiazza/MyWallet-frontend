import styled from "styled-components";
import Colors from "../config/colors";
import Typography from "../config/typography";

import { Text } from "./HeaderStyles";

export const Title = styled(Text)`
  margin-right: auto;
  margin-bottom: 2rem;
`;

export const Continaer = styled.div``;

export const DescriptionArea = styled.textarea`
  width: 100%;
  height: 70%;

  border-radius: 0.2rem;
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-size: 1.25rem;
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.5rem;

  margin: 0.3rem 0;
  padding: 1.2rem 1rem;

  resize: none;
`;
