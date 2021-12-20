import styled from 'styled-components'

export const Container = styled.div`
    color: var(--white);

    margin: 70px auto 40px;    
    
    border-radius: 0 30px 0 30px;

    border: 4px solid var(--color-card-orange);
    background-color: var(--black-background-card);
    position: relative;
    
    width: 61%;
    height: 200px;
    padding: 24px 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-family: var(--Roboto);

    div{
        height: 71px;
        width: 71px;
        background-color: var(--black-background-card);
        border: 4px solid var(--color-card-orange);
        border-radius: 20px;

        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;

        top: -40px;
        left: 60px;

        img{
            width: 42px;
            height: 42px;
        }
    }

    h1{
        font-weight: 300;
        font-size: 43px;
    }
`;

export const Info = styled.div`
    width: 61%;
    margin: 0 auto;


    h2{
        margin: 21px 0 30px 40px;

        font-weight: 300;
        font-family: var(--Roboto);
        color: var(--white-text-opacity-80);

        span{
            color: var(--color-card-orange);
        }
    }
`;