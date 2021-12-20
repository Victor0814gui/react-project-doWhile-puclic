import styled from 'styled-components';


export const Header = styled.div`
  display: flex;
  
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  padding: 20px 0;

  h2{
    color: var(--white);
    font-family: var(--Roboto);
    font-weight: 500;
  }
`;
  
export const Container = styled.div`
  background: var(--blue-background);
  width: 61%;
  border-radius: 30px;
  padding: 24px;
  margin: 30px auto;
  height: 300px;
  text-align: center;

  display: flex;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 41px;
    font-weight: 400;
    font-family: var(--Roboto);
    color: var(--white-text-opacity-80);
  }
  
  span{
    color: var(--white);
    font-size: 41px;
    font-weight: 600;
    font-family: var(--Roboto);
  }
`;
  
export const Section = styled.div`
  display: flex;
  margin: 0 auto;
  width: 61%;
  justify-content: center;
  align-items: center;
  font-family: var(--Roboto);

  img{
    width: 100%
  }

  h1{
    font-family: var(--Roboto);
    font-weight: 300;
    color: var(--white-text-opacity-80);

    span:first-child{
      color: var(--white);
      font-weight: 500;
    }

    span:last-child{
      font-weight: 600;
    }
  }
`;

export const ContainerImage = styled.div`
  width:50px;
  height: 50px;
  background-color:var(--black-background-button);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;