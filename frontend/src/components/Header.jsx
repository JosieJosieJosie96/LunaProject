import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../ui/Button';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
`;

const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 36px;
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src="frontend/src/assets/svg/logo.svg" alt="logo" />
      </div>
      <DivNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <div>
          <Button>Login</Button>
          <Button>Sign up</Button>
          <Button>Logout</Button>
        </div>
      </DivNav>
    </StyledHeader>
  );
}

export default Header;
