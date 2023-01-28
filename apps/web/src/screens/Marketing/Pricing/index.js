import React from 'react';
import styled from 'styled-components';
import ProCard from './proCard';
import BasicCard from './basicCard';
import PricingHeader from './pricingHeader';
import { colors, breakpoints } from '../../../styles/theme';

const Background = styled.div`
`;

const BackgroundSecondary = styled.div`
  margin-top: 4rem;
  padding-bottom: 3rem;

`;

const InnerBackgroundWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

const InnerBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 83.3%;

`;

const InnerWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  
`;

const Pricing = () => (
  <Background>
    <PricingHeader />
    <BackgroundSecondary>
      <InnerBackgroundWrapper>
        <InnerBackground />
        <InnerWrapper>
          <BasicCard title="Hobby" price="79" left />
          <ProCard />
          <BasicCard title="Scale" price="349" left={false} />
        </InnerWrapper>
      </InnerBackgroundWrapper>
    </BackgroundSecondary>
  </Background>
);

export default Pricing;
