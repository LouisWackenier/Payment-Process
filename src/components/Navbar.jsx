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
`;

const Navbar = () => {
  return (
    <MainContainer>
         <Title>Title Site</Title>        
    </MainContainer>
  )
}

export default Navbar