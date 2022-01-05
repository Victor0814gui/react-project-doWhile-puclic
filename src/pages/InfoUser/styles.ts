import styled from 'styled-components'

export const Container = styled.div`
    width: 61%;
    margin: 0 auto;
    font-family: var(--Roboto);

    h1{
        font-weight: 300;
        color: var(--white-text-opacity-80);

        span{
            font-weight: 500;
            color: var(--white);
        }
    }

    p{
        color: var(--white-text-opacity-80);
        font-weight: 300;

        a{
            color: var(--yellow-text);
        }
    }    

    a{
        color:var(--white);
    }
`;





export const Header = styled.div`
    width: 100%;
    height: 200px;

    border: 4px solid var(--color-card-orange);
    background-color: var(--black-background-card);

    border-radius: 20px;
    padding: 29px;
    margin-top: 70px;
    position: relative;

    
    &:before{
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 22px;

        content: "🙂";
        position: absolute;
        top: -37px;

        width: 61px;
        height: 61px;

        border-radius: 12px;
        border: 4px solid var(--color-card-orange);
        background-color: var(--black-background-card);
    }
`;


export const Section = styled.div`
    margin: 30px;
    color: var(--white);
    
    
    img{
        max-width: 100%;
        width: 78%;
        display: block;
        margin: 0 auto;
    }
    
    h3{
        font-weight: 400;
        margin: 10px 0 10px 40px;
    }    
`;