import React, { useState } from 'react';
import styled from 'styled-components';

import { colors, breakpoints } from '../../../styles/theme';
import SidebarMobile from '../Navigation/mobileSidebar';
import Header from '../Navigation/header';

const Wrapper = styled.div`
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
`;

const Layout = ({ children }) => {
  const [mobileMenu, toggleMobileMenu] = useState(false);
  const mobileMenuHandler = () => (mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true));

  return (
    <div>
      {mobileMenu && <SidebarMobile toggleMobileMenu={toggleMobileMenu} />}
      <Header mobileMenuHandler={mobileMenuHandler} />
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </div>
  );
};

export default Layout;
