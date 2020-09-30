import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainContainer = styled.main`
  flex-grow: 1;
  margin: 0 auto;
  padding: ${({ theme }) => theme.headerHeight} 1rem 0 1rem;
  max-width: 800px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
