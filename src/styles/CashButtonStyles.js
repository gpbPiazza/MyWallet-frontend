import styled from "styled-components";

import Colors from "../config/colors";
import Typography from "../config/typography";

export const Container = styled.button`
  width: 100%;
  height: 114px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 0.2rem;
  background-color: ${Colors.lightPurple};

  cursor: pointer;

  padding: 3.5%;
  margin-left: ${(props) => props.marginLeft};
`;

export const Text = styled.p`
  width: 20%;

  font-size: 1.1rem;
  font-weight: bold;
  color: ${Colors.white};
  font-family: ${Typography.RalewatRaleway};
  line-height: 1.25rem;
`;

export const IconContainer = styled.div`
  width: 100%;

  align-self: flex-start;
`;
