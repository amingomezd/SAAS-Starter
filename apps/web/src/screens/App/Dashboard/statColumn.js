import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import CountUp from 'react-countup';

const Wrapper = styled.div`
  padding: 1.25rem 1rem;

`;

const Dt = styled.dt`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Dd = styled.dd`
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

`;

const Number = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const InitialNumber = styled.span`
  font-weight: 500;
  line-height: 1.25rem;
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

const Description = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: baseline;
  color: ${({ pillTextColor }) => pillTextColor};
  background-color: ${({ pillColor }) => pillColor};
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.125rem 0.625rem;

`;

const StatColumn = ({ title, number, svg, diffDescription, diff, pillTextColor, pillColor }) => (
  <Wrapper>
    <dl>
      <Dt>{title}</Dt>
      <Dd>
        <Number>
          <CountUp separator="," end={number} />
        </Number>
        <Pill pillTextColor={pillTextColor} pillColor={pillColor}>
          {svg}
          <Description>{diffDescription}</Description>
          {diff}
        </Pill>
      </Dd>
    </dl>
  </Wrapper>
);

export default StatColumn;
