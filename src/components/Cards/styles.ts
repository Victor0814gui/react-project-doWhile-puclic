import styled from 'styled-components'


export const SectionCard = styled.div`
    display: flex;
    margin: 0 auto;
    width:61%;
    flex-direction: row;
    justify-content: center;

    margin-top: 80px;
    
    cursor: pointer;



  article:first-child{
    border: 4px solid var(--color-card-orange);
    border-radius: 0  40px 0 40px;

    &:hover{
      opacity:0.8;
      transform: scale(0.97);
    }

    h2{
        color: var(--color-card-orange);
        margin-top: 20px;
    }

    div{
        border: 4px solid var(--color-card-orange);
    }
  }

  article:last-child{
    border: 4px solid var(--color-card-green);
    border-radius: 40px 0 40px 0;

    &:hover{
      opacity:0.8;
      transform: scale(0.97);
    }

    h2{
        color: var(--color-card-green);
        margin-top: 20px;        
    }

    div{
        border: 4px solid var(--color-card-green);
    }
  }

  article{
      padding: 16px 12px;


      min-width: 230px;
      height: 280px;
      margin: 7px 20px;

      border: 4px solid var(--color-card-violet);
      border-radius: 30px;
      background-color: var(--black-background-card);
      position: relative;
      transition: 0.27s;
      
      font-family: var(--Roboto);

      main{
        margin-left: 20px;
      }

      h2{
        color: var(--color-card-violet);
        margin-top: 20px;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
      }

      h3,h4,span{
        color: var(--white);
        font-weight: 300;

      }

      h4{
        font-weight: 400;
        font-size: 20px;
        margin-top:7px;
      }

      ul{
        margin: 10px 0 0 30px;
        color: var(--white);
        font-weight: 300;

        font-family: var(--Inter);
      }

      p{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--white);

        &:hover{
          color: var(--red-text);
        }
      }

    &:hover{
      opacity:0.8;
      transform: scale(0.97);
    }
      
      div{
        border: 4px solid var(--color-card-violet);
        position: absolute;
        top: -10px;
        left: 50%;
        width: 71px;
        height: 71px;
        transform: translate(-50%, -50%);
        background-color: var(--black-background-card);
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            width: 42px;
            height: 42px;
        }
    }

    .classConstrutor:hover,
    .classMinerador:hover,
    .classDistribuidor:hover{
      opacity: 0.8;
    }
}
`;
