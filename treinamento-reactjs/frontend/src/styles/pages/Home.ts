import  styled  from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div` 
    padding: 2.8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        margin-bottom: 2rem;
    }

    .logo > img {
        width: 10rem;
    }
`

export const Form = styled(Unform)`
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 1.2rem;
    }

    .footer a span {
        font-family: 'Montserrat';
        font-size: 0.8rem;
        color: #1263E6;

        transition: opacity 0.2s;
    }

    .footer a span:hover {
        opacity: 0.6;
    }
`;