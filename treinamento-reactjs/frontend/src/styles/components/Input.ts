import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Legend = styled.div`

    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    color: var(--primary);
`;

export const InputContent = styled.div`
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        display: flex;
        align-items: center;
        margin-top: -1rem;
        color: var(--primary);
        z-index: 1;
    }

    input {
        width: 20rem;
        height: 2.6rem;

        margin-left: -2.1rem;
        padding-left: 2rem;
        padding-right: 0.8rem;
        border: 0vh;

        font-family: 'Montserrat';
        font-size: 12pt;

        border-radius: 0.4rem;

        margin-bottom: 1.2rem;
    }
`;







