import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Typography';
import Container from '../utils/Container';
import Button from '../atoms/Button';

const Root = styled.footer`
  padding: 5rem 0 0;
  background: var(--color-brand-1);
  color: #fff;
  > p{
    margin: 4rem 0 0;
    padding: 4rem;
    background: rgba(0, 0, 0, .08);
    @media(min-width: 720px) {
      margin: 10rem 0 0;
    }
  }
`;

const Info = styled.div`
  padding: 4rem;
  text-align: center;
  h4{
    margin: 6rem 0 2rem;
    color: var(--color-brand-3);
  }
  nav{
    a,button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25rem;
      height: 9rem;
      margin: auto;
      margin-bottom: 1rem;
      span span{
        display: block;
        color: var(--color-brand-3);
      }
    }
    @media(min-width: 480px) {
      display: flex;
      justify-content: center;
      a, button{
        margin: auto 1rem;
      }
    }
  }
`;

const Footer = () => (
  <Root id="footer">
    <Container>
      <Text as="h2" subheading>SIGN UP AS A STYLIST</Text>
      <Info>
        <Button as="a" href="https://styleqpro.typeform.com/to/HXykIu" curvy primary size="large">Join our skilled stylists</Button>
        <Text as="h4">Download our app</Text>
        <nav>
          <Button as="a" href="https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US" curvy><span>Get it on Android</span></Button>
          <Button href="/" curvy><span>Get it on iPhone<span>coming soon</span></span></Button>
        </nav>
      </Info>
    </Container>
    <Text align="center">Copyright © {new Date().getFullYear()} StyleQ</Text>
  </Root>
);

export default Footer;
