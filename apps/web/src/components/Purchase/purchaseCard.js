import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';

const Card = styled.div`
  padding: 2rem 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const PurchaseCard = ({ children }) => {
  return <Card>{children}</Card>;
};

export default PurchaseCard;
