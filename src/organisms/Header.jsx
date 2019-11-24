import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/styleq-logo.svg';
import Button from '../atoms/Button';

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 1rem 4rem 1rem 2rem;
  border-left: solid 2rem var(--color-brand-2);
  img{
    width: 10rem;
  }
`;

const Header = () => (
  <Root>
    <img src={Logo} alt="StyleQ Logo" />
    <Button>Book now</Button>
  </Root>
);

export default Header;
