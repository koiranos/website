import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Typography';

const Root = styled.footer`
  padding: 4rem;
  background: var(--color-brand-1);
  color: #fff;
`;

const Footer = () => (
  <Root>
    <Text align="center">Copyright © {new Date().getFullYear()} StyleQ</Text>
  </Root>
);

export default Footer;
