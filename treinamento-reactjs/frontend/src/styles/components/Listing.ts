import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;

    @media (min-width: 700px) {
        margin-left: 6rem;
    }

    .date {
        display: flex;
        align-items: center;
        border: 1px solid;
        width: 8rem;
        justify-content: center;
        
        background: var(--lightBase);

        position: relative;
        margin-bottom: -10px;
    }

    .date > small {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 1rem;
    }

    .transaction {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--lightBase);

        max-width: 32rem;
        height: 6rem;

        padding: 1.2rem;
        margin-left: 2rem;

        transition: box-shadow 0.4s;


        &:hover {
            box-shadow: 5px 2px 2px rgba(0,0,0, 0.2);
        }

        .description {
            display: flex;
            flex-direction: column;

            strong {
                font-family: 'Lato';
                font-size: 1.2rem;
                font-weight: 500;

                @media (min-width: 720px) {
                    font-size: 1.4rem;
                }
            }

            small {
                font-family: 'Lato';
                font-size: 1rem;
                font-weight: 300;

                margin-top: 0.2rem;

                @media (min-width: 720px) {
                    font-size: 1.2rem;
                }
            }
        }

        .price {
                display: flex;
                flex-direction: row;
                align-items: center;

                margin-right: 2.4rem;

                strong {
                    font-family: 'Roboto';
                    font-size: 1rem;
                    font-weight: 600;

                    color: var(--DarkBase);

                    @media (min-width: 720px) {
                        font-size: 1.4rem;
                        margin-right: 4.2rem;
                    }
                }
            }

            @media (min-width: 720px) {
                max-width: 64rem;
            }
    }
`;