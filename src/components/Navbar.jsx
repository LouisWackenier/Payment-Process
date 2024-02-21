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
    margin-top: 2px;
    border: transparent;
    border-radius: 10px;
    background-color: #1B7E7D;
    font-size: 2rem;

    width: 50px;
    height: 50px;
`;

const RegistrationButton = styled.button`
    margin-top: 12px;
    background-color: #BDD922;
    font-size: 1rem;
    width: 5vw;
    border-radius: 5px;
    border: transparent;
    margin-left: 1vw;
    margin-right: 1vw;

    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 6px;
    padding-right: 18px;
    transition: background-color 1s;

    &:hover {
      background-color: darkblue;
    }
`;

const LogInButton = styled.button`
    margin-top: 12px;
    background-color: #197272;
    font-size: 1rem;
    width: 100px;
    border-radius: 5px;
    border: transparent;
    
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    transition: background-color 1s;

    &:hover {
      background-color: darkblue;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    text-align: right;
    margin-left: 79vw;
    background-color: transparent;
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