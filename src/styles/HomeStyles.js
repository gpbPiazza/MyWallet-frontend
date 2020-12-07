import styled from 'styled-components';

import Colors from '../config/colors';

export const TransactionBox = styled.div`
   width: 100%;
   height: 100%;

   background-color: ${Colors.white};
   border-radius: 0.5rem;

   margin-top: 10%;
   overflow-y: scroll;
`;

export const ButtonContainer = styled.div`
   width: 100%;
   height: auto;

   display: flex;
   justify-content: space-between;
   flex-direction: row;

   margin-top: 10%;
`;
