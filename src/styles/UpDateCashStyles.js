import styled from "styled-components";
import Colors from "../config/colors";
import Typography from "../config/typography";

import { Text } from "./HeaderStyles";

export const Title = styled(Text)`
  margin-bottom: 2rem;

  margin-left: 1rem;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DescriptionArea = styled.textarea`
  width: 100%;
  height: 27%;

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
