import styled from 'styled-components';

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    background: var(--darkBase);
    padding: 2rem;

    .userIcon, .closeIcon {
    color: #FFF;
    transition: color 0.2s;
}

.userIcon:hover, .closeIcon:hover {
    color: var(--secondary);
    opacity: 0.8;
    cursor: pointer;
}

`;







