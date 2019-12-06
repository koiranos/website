import React from 'react';
import { Link } from 'gatsby';
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
    vertical-align: middle;
    width: 10rem;
  }
`;

const Header = () => (
  <Root>
    <Link to="/"><img src={Logo} alt="StyleQ Logo" /></Link>
    <Button as="a" cta rel="noopener" href="https://square.site/book/DCG3FAF4DY4K3/styleq-milwaukee-wi">Book now</Button>
  </Root>
);

export default Header;
