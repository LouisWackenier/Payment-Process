import styled from "styled-components"

const MainContainer = styled.div`
    height: 5vh;
    width: 99vw;
    background-color: #166665;
`;

const Title = styled.h3`
   
`;

const Navbar = () => {
  return (
    <MainContainer>
         <Title>Title Site</Title>
         
    </MainContainer>
  )
}

export default Navbar