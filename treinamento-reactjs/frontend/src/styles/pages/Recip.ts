import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    max-width: 100vw;

`;

export const Form = styled(Unform)`
    padding: 3.6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 1.4rem;
    }

`;

export const ButtonSave = styled.div`
    display: flex;
    align-items: center;

    margin-top: 2rem;

    button {
        width: 20rem;
        height: 2.6rem;
        background: var(--primary);
        color: var(--lightBase);
        border: none;
        
        font-family: 'Montserrat';
        font-size: 1.4rem;
        font-weight: 700;

        transition: background-color 0.4s;

        &:hover {
        background-color: var(--lightBase);
        border: 1px solid;
        color: var(--dark);
        opacity: 0.8;
    }

    }

   
`;
