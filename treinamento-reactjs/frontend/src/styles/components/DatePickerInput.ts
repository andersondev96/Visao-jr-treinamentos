import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
        color: var(--primary);
    }

    input {
        display: flex;
        width: 20rem;
        height: 2.6rem;

        padding-left: 2rem;
        padding-right: 0.8rem;
        border: 0vh;

        font-family: 'Montserrat';
        font-size: 12pt;

        border-radius: 0.4rem;

        margin-bottom: 1.2rem;
    }

`;

