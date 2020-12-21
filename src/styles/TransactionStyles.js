import styled from "styled-components";

import Colors from "../config/colors";
import Typography from "../config/typography";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;

  padding: 2% 5%;
`;

export const Date = styled.p`
  font-family: ${Typography.RalewatRaleway};
  font-size: 1rem;
  line-height: 1.2rem;

  color: ${Colors.grey};

  margin-right: 3%;
`;

export const Description = styled(Date)`
  color: ${Colors.black};
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  margin-right: auto;
`;

export const Value = styled(Date)`
  color: ${(props) => (props.typeTransaction ? Colors.green : Colors.red)};
  margin-right: 0;
`;
