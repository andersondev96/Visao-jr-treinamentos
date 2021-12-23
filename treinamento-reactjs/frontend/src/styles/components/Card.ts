import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    background: var(--lightYellow);
    border: 2px solid #D3D3D3;
    border-radius: 10px;
    transition: filter 0.3s;
    background: var(--darkBase);
    opacity: 0.9;
    color: var(--lightBase);

    @media (min-width: 720px) {
        max-width: 32vw;
    }
   

    &:hover {
        filter: brightness(150%);
    }

    strong {
        font-family: 'Montserrat';
        font-size: 1.6rem;
        font-weight: 800;
    }

    small {
        font-family: 'Lato';
        font-size: 1.1rem;
        font-weight: 400;

        margin-bottom: 1.2rem;
    }

`;
