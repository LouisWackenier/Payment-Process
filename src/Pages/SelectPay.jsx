import styled from "styled-components"

const MainContainer = styled.div`
      background-color: #0D4D4D;
      display: flex;
`;

const MenuList = styled.div`

`;

const MenuItem = styled.div`
      background-color: darkgreen;
      margin-left: 5vw;
`;

const PaymentListContainer = styled.div`
      background-color: darkgreen;
      margin-left: 50vw;
`;

const MethodContainer = styled.div`
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