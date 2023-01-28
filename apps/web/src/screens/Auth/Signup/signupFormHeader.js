import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import Link from 'next/link';
import Title from '../../../components/Auth/title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AltText = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`;

const SignupFormHeader = () => (
  <Wrapper>
    <Title>Sign-Up for an Account</Title>
    <AltText>
      <Link href="/auth/login">
        Already Have an Account? Login here
      </Link>
    </AltText>
  </Wrapper>
);

export default SignupFormHeader;
