import {styled} from 'styled-components'

export const AppWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-direction: column;
    background: ${(props) => props.theme.bgImage};
    background-size: cover;
    background-position: center;
    gap:4rem;
    height: 100vh;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);

    .btn-wrapper{
        display: flex;
        gap: 5rem;
    }
`;