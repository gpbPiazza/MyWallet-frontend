import styled from 'styled-components';

import Colors from '../config/colors';

export const TransactionBox = styled.div`
   width: 100%;
   height: 100%;

   background-color: ${Colors.white};

   margin-top: 10%;
   overflow-y: scroll;

   border-top-left-radius: 0.5rem;
   border-top-right-radius: 0.5rem;
`;

export const ButtonContainer = styled.div`
   width: 100%;
   height: auto;

   display: flex;
   justify-content: space-between;
   flex-direction: row;

   margin-top: 10%;
`;
