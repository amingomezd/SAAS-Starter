import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import Link from 'next/link';

const Background = styled.div`
`;

const Wrapper = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 4rem 1rem;

`;

const Header = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;

`;

const Span = styled.span`
  display: block;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

const StyledLink = styled.a`
  margin-top: 2rem;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  border-width: 1px;
  border-color: transparent;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  &:hover {
  }
  
`;

const CTASection = () => (
  <Background>
    <Wrapper>
      <Header>
        <Span>Main Benefit of Product</Span>
        <Span>Call to Action </Span>
      </Header>
      <Paragraph>
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
        sagittis vel nulla nec.
      </Paragraph>
      <Link href="/auth/signup" passHref>
        <StyledLink>Sign up for free</StyledLink>
      </Link>
    </Wrapper>
  </Background>
);

export default CTASection;
