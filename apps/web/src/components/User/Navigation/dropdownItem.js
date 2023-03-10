import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  cursor: pointer;
  display: block;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  &:hover {
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const DropdownItem = ({ onClick, title }) => (
  <Wrapper onClick={onClick} role="menuitem">
    {title}
  </Wrapper>
);

export default DropdownItem;
