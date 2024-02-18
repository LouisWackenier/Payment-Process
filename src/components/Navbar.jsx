import styled from "styled-components"

import { Link } from "react-router-dom";

const MainContainer = styled.div`
    height: 6vh;
    width: 99vw;

    display: flex;
    background-color: #166665;
    font-size: 1rem;
`;

const Title = styled.h4`
   background-color: transparent;
   margin-left: 0.5vw;
`;

const DepositButton = styled.button`
    border: transparent;
    border-radius: 10px;
    background-color: #1B7E7D;
    font-size: 2rem;
    margin-top: 0.5vh;

    width: 50px;
    height: 50px;
`;

const RegistrationButton = styled.button`
    margin-top: 12px;
    background-color: #BDD922;
    font-size: 1rem;
    width: 5vw;

    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 16px;
    padding-right: 16px;

    margin-right: 1vw;
    margin-left: 1vw;
`;

const LogInButton = styled.button`
    margin-top: 12px;
    background-color: #197272;
    font-size: 1rem;
    width: 100px;
    
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
`;

const ButtonContainer = styled.div`
    display: flex;
    text-align: right;
    margin-left: 79vw;
`;

const Navbar = () => {
  return (
    <MainContainer>
         <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
           <Title>Title Site</Title>     
         </Link>
         <ButtonContainer>
            <Link to="/Select payment" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
            <DepositButton>$</DepositButton> 
            </Link>             
            <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
            <RegistrationButton>Registration</RegistrationButton>  
            </Link>   
             <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
             <LogInButton>Log In</LogInButton> 
             </Link>  
         </ButtonContainer>
    </MainContainer>
  )
}

export default Navbar