import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import LogoImg from '../assets/svg/logo.svg';

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
  const navigate = useNavigate();

  const token = window.localStorage.getItem('token');

  function handleLogout() {
    window.localStorage.clear();

    navigate('/login');
  }
  return (
    <StyledHeader>
      <div>
        <img src={LogoImg} alt="logo" />
      </div>
      <DivNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <button
          style={{
            border: 'none',
            backgroundColor: 'inherit',
            fontSize: '20px',
          }}
          onClick={() => {
            if (!token) return navigate('login');
          }}
        >
          <NavLink to="/profile">Profile</NavLink>
        </button>
        <div>
          {!token && (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}

          {token && <Button onClick={() => handleLogout()}>Logout</Button>}
        </div>
      </DivNav>
    </StyledHeader>
  );
}

export default Header;
