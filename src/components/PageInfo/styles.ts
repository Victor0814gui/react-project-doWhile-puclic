import styled from 'styled-components'


export const Container = styled.div`
    color: var(--white);
    
    width: 61%;

    margin: 0 auto;
    font-family: avar(--Roboto);

    div{
        text-align: center;

        h2{
            font-weight: 300;
        }

        h1{
            font-weight: 600;
            margin-top: 0;
        }
    }

    h1{
        text-align: center;
        font-weight: 200;
        margin-top: 90px;

        span:first-child{
            color: var(--red-text);
        }

        span:nth-child(2){
            color: var(--violet-text);
        }

        span:last-child{
            color: var(--yellow-text);
        }
    }


    main{


        img{
            width: 100%;
        }

        h3{
            text-align: center;
            font-size: 37px;
            font-weight: 200;
            
            margin: 70px 0;
            
            color: var(--white-text-opacity-80);

            span:first-child{
                color: var(--white);
                font-weight: 500;
                font-size: 47px;

            }
            
            span:last-child{
                color: var(--violet-text);
                font-weight: 700;
                font-size: 47px;

            }
        }
    }

`;

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 61%;

    margin: 0 auto;

    img{
        width: 100%;
    }

    h1{
        color: var(--white);
        font-weight: 300;
        font-family: var(--Roboto);
        font-size: 31px;
        text-align: center;

        span:first-child{
            color: var(--white);
            font-weight: 600;
        }

        span:nth-child(2){
            color: var(--blue-background);
        }

        span:last-child{
            color: var(--yellow-text);
            font-weight: 600;

        }
    }
`;