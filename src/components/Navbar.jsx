import styled from "styled-components"

const MainContainer = styled.div`
    height: 5vh;
    width: 99.8vw;

    display: flex;
    background-color: #166665;
    font-size: 3rem;
`;

const Title = styled.h3`
   background-color: transparent;
   margin-left: 1vw;
`;

const DepositButton = styled.button`
    border: transparent;
    border-radius: 10px;
    background-color: #1B7E7D;
    font-size: 4rem;
    margin-top: 10px;

    width: 110px;
    height: 110px;
`;

const RegistrationButton = styled.button`
    background-color: #BDD922;
    font-size: 3rem;
    width: 5vw;

    margin-left: 1vw;
`;

const LogInButton = styled.button`
    background-color: #197272;
    font-size: 3rem;
    width: 4vw;
`;

const ButtonContainer = styled.div`
    display: flex;
    text-align: right;
    margin-left: 75vw;
`;

const Navbar = () => {
  return (
    <MainContainer>
         <Title>Title Site</Title>     
         <ButtonContainer>
             <DepositButton>$</DepositButton>   
             <RegistrationButton>Registration</RegistrationButton>   
             <LogInButton>Log In</LogInButton>   
         </ButtonContainer>
    </MainContainer>
  )
}

export default Navbar