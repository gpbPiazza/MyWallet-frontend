import styled from 'styled-components';

import Colors from '../config/colors';
import Typography from '../config/typography';

export const Title = styled.h1`
    text-align: center;
    margin-top: 5rem;

    font-family: ${Typography.SairaStencil};
    font-size: 2rem;
    color: ${Colors.white};

    line-height: 3.2rem;
`;

export const Button = styled.button`
    width: 100%;
    
    border-radius: 0.2rem;
    background-color: ${Colors.lightPurple};

    color: ${Colors.white};
    font-size: 1.25rem;
    font-family: ${Typography.Raleway};
    line-height: 1.5rem;
    font-weight: bold;


    margin: 0.2rem 0;
    padding: 1.2rem 1rem;

`;

export const TextError = styled.p`
    text-align: center;

    color: ${Colors.darkGrey};
    border-bottom: 1px solid ${Colors.darkGrey};
    font-size: 0.8rem;
    font-family: ${Typography.Raleway};
    line-height: 1rem;

`;

export const Text = styled(TextError)`
    color: ${Colors.white};
    font-size: 1rem;
    border-bottom: 0px;
    font-weight: bold;

    margin-top: 1rem;
`;