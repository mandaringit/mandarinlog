import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <h4>© mandarin, {new Date().getFullYear()}</h4>
    </Container>
  );
};

export default Footer;
