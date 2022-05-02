import styled from 'styled-components';
import { Notifications } from './Notifications';

const StyledNavbar = styled.nav`
  align-items: center;
  background-color: #DEDEDE;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 30px;
`;

const AppTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <AppTitle>CryptoTracker</AppTitle>
      <Notifications></Notifications>
    </StyledNavbar>
  )
}
