import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Typography';
import Container from '../utils/Container';
import Button from '../atoms/Button';
import { TextBox } from '../atoms/Forms';

const Root = styled.footer`
  padding: 5rem 0 0;
  background: var(--color-brand-1);
  color: #fff;
  ${Container}{
    padding: 0 2rem;
    > div{
      display: flex;
      align-items: center;
      flex: 1;
      padding: 2rem;
      &:nth-child(2) {
        color: var(--color-brand-3);
        a, span {
          display: block;
          margin-bottom: 2rem;
        }
      }
    }
    @media(min-width: 720px) {
      display: flex;
      padding: 0;
    }
    @media(min-width: 1100px) {
      &:first-child{
        flex: 2;
      }
    }
  }
  h4{
    color: var(--color-brand-4);
    font-weight: 300;
  }
  > p{
    margin: 4rem 0 0;
    padding: 4rem 3rem;
    background: rgba(0, 0, 0, .08);
    color: var(--color-brand-5);
    span{
      display: block;
      margin-bottom: 1rem;
      > *:not(:first-child){
        margin-left: 1.5rem;
      }
    }
    @media(min-width: 720px) {
      display: flex;
      justify-content: space-between;
      margin: 10rem 0 0;
      span{
        display: inline-block;
        margin-bottom: 0;
      }
    }
    @media(min-width: 1200px) {
      margin-top: 15rem;
    }
  }
  @media(min-width: 1200px) {
    padding: 15rem 0 0;
  }
`;

const Footer = () => (
  <Root id="footer">
    <Container>
      <div>
        <div>
          <Text as="h4">Sign up as a stylist</Text>
          <Button as="a" href="https://styleqpro.typeform.com/to/HXykIu" curvy primary size="large">Join our stylists</Button>
        </div>
      </div>
      <div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=ubitrix.styleq&hl=en_US">Get the app on Android</a>
          <span>Get the app on iPhone (Coming Soon)</span>
        </div>
      </div>
      <div>
        <form action="">
          <Text as="h4">Subscribe to our newsletter</Text>
          <TextBox block id="newsletter" placeholder="Enter your email address" />
          <Button primary curvy>Subscribe</Button>
        </form>
      </div>
    </Container>
    <Text>
      <span>Copyright © {new Date().getFullYear()} StyleQ</span>
      <span>
        <a href="https://www.facebook.com/BookStyleQ/">Facebook</a>
        <a href="https://twitter.com/bookstyleq">Twitter</a>
        <a href="https://www.instagram.com/intostyleq/">Instagram</a>
      </span>
    </Text>
  </Root>
);

export default Footer;
