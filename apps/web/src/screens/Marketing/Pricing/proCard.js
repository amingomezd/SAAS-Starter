import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ListItem from './ListItem';
import { colors, breakpoints } from '../../../styles/theme';

const Wrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
`;

const Border = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.5rem;
  border-width: 2px;
`;

const LabelWrapper1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const LabelWrapper2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.span`
  display: inline-flex;
  border-radius: 9999px;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.05em;
`;

const CardHeader = styled.div`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 3rem 1.5rem 2.5rem;
`;

const Title = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Price = styled.div`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  align-items: flex-start;
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -0.025em;

`;

const Currency = styled.span`
  font-weight: 500;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  font-size: 2.25rem;
`;

const Number = styled.span`
  font-weight: 800;
`;

const TimePeriod = styled.span`
  font-weight: 500;
  line-height: 2rem;
  font-size: 1.5rem;
`;

const CardBody = styled.div`
  border-top-width: 2px;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 2.5rem 1.5rem 2rem;

`;

const StyledListItem = styled(ListItem)`
  margin-top: 1rem;
`;

const LinkWrapper = styled.div`
  margin-top: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border-width: 1px;
  border-width: 1px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  &:hover {
    color: white;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(180, 198, 252, 0.45);
  }
`;

const GrowthCard = () => (
  <Wrapper>
    <Border />
    <LabelWrapper1>
      <LabelWrapper2>
        <Label>Most popular</Label>
      </LabelWrapper2>
    </LabelWrapper1>
    <CardHeader>
      <div>
        <Title id="tier-growth">Growth</Title>
        <PriceWrapper>
          <Price>
            <Currency>$</Currency>
            <Number>149</Number>
          </Price>
          <TimePeriod>/month</TimePeriod>
        </PriceWrapper>
      </div>
    </CardHeader>
    <CardBody>
      <ul>
        <ListItem text="Quia rem est sed impedit magnam" />
        <StyledListItem text="Dolorem vero ratione voluptates" />
        <StyledListItem text="Qui sed ab doloribus voluptatem dolore" />
        <StyledListItem text="Laborum commodi molestiae id et fugiat" />
        <StyledListItem text="Nam ut ipsa nesciunt culpa modi dolor" />
      </ul>
      <LinkWrapper>
        <Link href="/auth/signup" aria-describedby="tier-growth" passHref>
          <StyledLink>Start your trial</StyledLink>
        </Link>
      </LinkWrapper>
    </CardBody>
  </Wrapper>
);

export default GrowthCard;
