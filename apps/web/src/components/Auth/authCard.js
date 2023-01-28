import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';
// TODO: Deprecate this component in favor of the new Card component
// const CardWrapper = styled.div`
//   padding-left: 2rem;
//   padding-right: 2rem;
//
// `;
//
// const Card = styled.div`
//   padding: 2rem 1rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export const AuthCard = ({ children }) => {
  return (
    <>
      <>{children}</>
    </>
  );
};

export default AuthCard;
