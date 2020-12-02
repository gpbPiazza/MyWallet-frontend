import styled from 'styled-components';

import Colors from '../config/colors';
import Typography from '../config/typography';

export const ContentButton = styled.button`
    width: 100%;
    height: 46px;
   
    border-radius: 0.2rem;
    
    background-color: ${Colors.lightPurple};

    font-size: 1.25rem;
    font-weight: bold;
    color: ${Colors.white};
    font-family: ${Typography.Raleway};
    line-height: 1.5rem;

    cursor: pointer;

    margin: 0.3rem 0;
`;