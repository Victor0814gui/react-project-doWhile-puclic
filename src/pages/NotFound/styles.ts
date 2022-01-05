import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-family: var(--Inter);
        font-size: 40px;

        color: var(--white-text-opacity-80);

        margin-top: 40px;
    }

    img{
        max-width: 100%;
    }
`;