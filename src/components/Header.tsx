import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background-color: #f37a38;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin-left: 1rem;
`;

const Nav = styled.nav`
  margin-right: 1rem;
  ul {
    display: flex;
    li + li {
      margin-left: 2rem;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Title>MANDARINLOG</Title>
      <Nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">어바웃</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
