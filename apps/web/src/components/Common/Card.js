import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

const StyledCard = styled.div`
  margin-top: 1.25rem;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const Card = ({ children, className }) => <StyledCard className={className}>{children}</StyledCard>;

export default Card;
