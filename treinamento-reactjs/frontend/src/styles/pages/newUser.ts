import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div` 
    padding: 2.8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
    font-family: 'Roboto';
    font-size: 2.8rem;
    margin: 2.4rem 0;
}

`;

export const Form = styled(Unform)`
    .footer a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        margin-top: 1.2rem;
    }

    .footer a svg {
        color: #1263E6;
    }

    .footer a span {
        font-family: 'Montserrat';
        font-size: 0.8rem;
        color: #1263E6;

        transition: opacity 0.2s;
        margin-left: 1.2rem;

    }

    .footer a span:hover {
        opacity: 0.6;
    }
`;
