import styled from "styled-components"

const MainContainer = styled.div`
      background-color: #0D4D4D;
      display: flex;
`;

const MenuList = styled.div`
      margin-top: 1.5vh;
      margin-left: 1vw;
      width: 20vw;
      height: 40vh;
      background-color: darkgreen;
`;

const MenuItem = styled.div`
      background-color: transparent;
      margin-left: 5vw;
`;

const PaymentListContainer = styled.div`
      margin-top: 1.5vh;
      margin-right: 1vw;

      width: 80vw;
      height: 40vh;
      background-color: darkgreen;
      margin-left: 1vw;
`;

const MethodContainer = styled.div`
      background-color: transparent;
`;

const SelectPay = () => {
  return (
    <MainContainer>
          <MenuList>
                <MenuItem>First</MenuItem>
                <MenuItem>Second</MenuItem>
                <MenuItem>Third</MenuItem>
          </MenuList>
          <PaymentListContainer>
                 <MethodContainer>Visa</MethodContainer>
                 <MethodContainer>Apple pay</MethodContainer>
                 <MethodContainer>Bancontact</MethodContainer>
          </PaymentListContainer>
    </MainContainer>
  )
}

export default SelectPay