import React from 'react';
import styled from 'styled-components';

import { colors, breakpoints } from '../../../styles/theme';
import SEO from '../../Marketing/Layout/seo';

import Header from '../Navigation/header';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const seoData = {
    title: 'Saas Starter Kit Pro Purchase page',
    description: 'Saas Starter Kit Pro Purchase page'
  };
  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <Wrapper>
        <Header />
        <div>{children}</div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
