import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.2rem;

    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 20rem;
        padding: 1.8rem;
        height: 1.4rem;

        border: none;
        color: var(--lightBase);

        transition: opacity 0.2s;

        strong {
            font-family: 'Montserrat';
            font-weight: 700;

            margin-left: 2rem;
        }

        &:hover {
            opacity: 0.8;
        }
    }
`;