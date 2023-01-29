import React from 'react';
import styled from 'styled-components';

import { colors, breakpoints } from '../../../styles/theme';

import Header from '../Navigation/header';
import Footer from '../Navigation/footer';

// const Wrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
