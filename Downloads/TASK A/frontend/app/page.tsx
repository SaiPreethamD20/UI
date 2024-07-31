"use client";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Settings from '../components/Settings';
import GlobalStyle from '../styles/globalStyles';
import styled from 'styled-components';

const Home = () => (
  <>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <Settings />
      </MainContent>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default Home;
