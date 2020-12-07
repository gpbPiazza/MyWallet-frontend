import styled from 'styled-components';

import Colors from '../config/colors';
import Typography from '../config/typography';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    width: 85%;

    background-color: ${Colors.white};
    border-radius: 0.5rem;

    padding: 2% 5%;

    position: fixed;
    bottom: 10.2rem;
    left: 1.5rem;
`;

export const Text = styled.p`
    font-family: ${Typography.RalewatRaleway};
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.2rem;

    color: ${Colors.black};
`;

export const Value = styled(Text)`
    font-weight: normal;

    color: ${Colors.green};
`;