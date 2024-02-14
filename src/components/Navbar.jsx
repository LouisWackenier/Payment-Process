import styled from "styled-components"

const MainContainer = styled.div`
    height: 5vh;
    width: 98vw;

    display: flex;
    background-color: #166665;
    font-size: 1rem;
`;

const Title = styled.h3`
   background-color: transparent;
   margin-left: 1vw;
`;

const DepositButton = styled.button`
    border: transparent;
    border-radius: 10px;
    background-color: #1B7E7D;
    font-size: 2rem;
    margin-top: 0.5px;

    width: 50px;
    height: 50px;
`;

const RegistrationButton = styled.button`
    background-color: #BDD922;
    font-size: 1rem;
    width: 5vw;

    margin-left: 1vw;
`;

const LogInButton = styled.button`
    background-color: #197272;
    font-size: 1rem;
    width: 100px;
`;

const ButtonContainer = styled.div`
    display: flex;
    text-align: right;
    margin-left: 77vw;
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