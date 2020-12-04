import styled from 'styled-components';

import Colors from '../config/colors';
import Typography from '../config/typography';

export const Container = styled.button`
    width: 45%;
    height: 114px;
   
    border-radius: 0.2rem;
    background-color: ${Colors.lightPurple};

    cursor: pointer;

    margin:  0 5%;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: ${Colors.white};
    font-family: ${Typography.Raleway};
    line-height: 1.25rem;
`;
