import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Typography';
import Container from '../utils/Container';

const Root = styled.footer`
  padding: 5rem 2rem;
  background: var(--color-brand-1);
  color: #fff;
`;

const Footer = () => (
  <Root>
    <Container>
      <Text as="h2" subheading>SIGN UP AS A STYLIST</Text>
      <Text align="center">Copyright © {new Date().getFullYear()} StyleQ</Text>
    </Container>
  </Root>
);

export default Footer;
