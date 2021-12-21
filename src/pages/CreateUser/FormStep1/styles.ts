import styled from 'styled-components'


export const Container =  styled.div`
    color: var(--white);
    text-decoration: none;

    width: 61%;
    padding: 24px;

    margin: 0 auto;

    display: flex;
    align-items:center;
    justify-content: center;
    gap: 20px;

    text-align: center;

    img{
        width: 80%;
    }

    h2{
        font-weight:300;
        font-family: var(--Roboto);
        margin: 10px 0;
    }

    h1{
        font-weight:500;
        font-family: var(--Roboto);
        margin: 10px 0 20px;
    }

    main{
        position: fixed;
        left:27%;
        top:40%;
    }

   form{
       display: flex;
       flex-direction: column;

        button{
            width: 100px;
            height:41px;
            margin-top: 10px;
        }

        input{
            border: 3px solid var(--color-card-green);

            height: 50px;
            width: 400px;

            padding: 0  20px;
            border-radius: 12px;
            
            background-color: var(--black-background-card);
            color: var(--white);

            font-weight: 500;
            font-size: 21px;
            font-family: var(--Roboto);
        }
   }


`;