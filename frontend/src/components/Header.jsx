import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import LogoImg from '../../ui/LogoImg';

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
        <img src="luna-project-assets/logo.svg" alt="logo" />
      </div>
      <DivNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
          <Link to="/login">
            <Button>Logout</Button>
          </Link>
        </div>
      </DivNav>
    </StyledHeader>
  );
}

export default Header;
