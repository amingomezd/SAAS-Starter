import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Link from 'next/link';
import { colors, breakpoints } from '../../../styles/theme';
import FlyoutMenu from './flyoutMenu';

import Button from '../../Common/buttons/PrimaryButton';
import MobileMenu from './mobileMenu';
import LargeLogo from '../../../components/Common/svgs/LargeLogo';
import ChevronDown from '../svgs/chevronDown';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  height: 5rem;
  * {
    margin-right: 10px;
  }
`;

const LogoWrapper = styled.div`

`;

const MenuWrapper = styled.div`
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;

`;

const MenuButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  &:hover {
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const MenuImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Nav = styled.nav`
  display: none;

`;

const SolutionsWrapper = styled.div`
  position: relative;
`;

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(0.25rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const FlyoutMenuWrapper = styled.div`
  animation: ${fadeInUp} 0.3s ease-in forwards;
`;

const ButtonWrapper = styled.div`
  display: none;

  align-items: center;
  justify-content: flex-end;
  margin-left: 2rem;
`;

const SolutionsButton = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: 8px;
  svg {

    &:hover ${SolutionsButton} {
    }
    &:focus ${SolutionsButton} {
    }
  }
`;

const StyledLink = styled.a`
  margin-left: 2.5rem;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  font-size: 1.1rem;
  font-weight: 800;
  color: black;
  &::before {
    content: '';
    margin-bottom: -5px;
    position: absolute;
    width: 0;
    height: 6px;
    bottom: 0;
    left: 0;
    background-color: red;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      visibility: visible !important;
      width: 100%;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      margin-left: 2.5rem;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      font-size: 1.1rem;
      font-weight: 800;
      color: black;
      &::before {
        content: '';
        margin-bottom: -5px;
        position: absolute;
        width: 0;
        height: 6px;
        bottom: 0;
        left: 0;
        background-color: red;
        visibility: visible;
        transition: all 0.3s ease-in-out;
        width: 100%;
      }
    `}
`;

const Header = () => {
  const location = useRouter();
  const ref = useRef();
  const refMobile = useRef();
  const [menu, toggleMenu] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  const mobileMenuHandler = () => (mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true));

  useOutsideClick(ref, () => toggleMenu(false));
  useOutsideClick(refMobile, () => toggleMobileMenu(false));

  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
            <LargeLogo />
        </Link>
      </LogoWrapper>
      <MenuWrapper ref={refMobile}>
        <MenuButton onClick={mobileMenuHandler}>
          <MenuImage src="/icons/menu.svg" alt="menu" />
        </MenuButton>
        {mobileMenu ? <MobileMenu mobileMenuHandler={mobileMenuHandler} /> : null}
      </MenuWrapper>
      <Nav>
        <SolutionsWrapper onMouseOver={() => toggleMenu(true)} ref={ref}>
          <SolutionsButton type="button">
            Solutions
            <StyledChevronDown height="1.25rem" width="1.25rem" />
          </SolutionsButton>

          {menu ? (
            <FlyoutMenuWrapper>
              <FlyoutMenu />
            </FlyoutMenuWrapper>
          ) : null}
        </SolutionsWrapper>

        <Link href="/pricing" passHref>
          <StyledLink isActive={location.asPath === '/pricing'}>Pricing</StyledLink>
        </Link>
      </Nav>
      <ButtonWrapper>
        <Link href="/auth/login" passHref>
            <Button>Sign-In</Button>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Header;
