import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme';
import SmallLogo from '../../Common/svgs/SmallLogo';

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0.7rem;
// `;

const Header = () => {
  return (
    // <Wrapper>
      <SmallLogo height={50} width={59} />
    // </Wrapper>
  );
};

export default Header;
