import React from 'react';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Header from '../organisms/Header';
import BGImage from '../assets/bg-lady.webp';
import Text from '../atoms/Typography';
import Container from '../utils/Container';
import Stylist from '../molecules/Stylist';

const Section1 = styled.section`
  --fade-bg: 255, 255, 255;
  position: relative;
  height: 60rem;
  padding: 5rem 8rem 1rem 2rem;
  background: url(${BGImage}) no-repeat;
  background-position: 15% 100%;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    height: 25rem;
    background: linear-gradient(to top, rgba(var(--fade-bg), 1) 10%, rgba(var(--fade-bg), 0));
  }
  h5{
    position: absolute;
    top: 9rem;
    left: 2rem;
    writing-mode: vertical-lr;
    transform: scale(-1);
    background: linear-gradient(to top, #7e2169, #E62175);
    background-size: 200% auto;
    color: #000;
    text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    span{
      position: relative;
      bottom: .5rem;
      background: inherit;
    }
  }
`;

const Section3 = styled.section``;

const Section4 = styled.section`
  padding: 6rem 0;
 > div{
    @media (min-width: 520px) {
      display: grid;
      grid-template-columns: 300px 300px 300px;
      grid-gap: calc((1100px - 900px) / 2);
    }
 }
`;

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Section1>
      <Text as="h1" intro>BOOK<br /> THE BEST<br /> STYLISTS<br /> QUICKLY</Text>
      <Text as="h5">
        <Text as="span">‹‹‹</Text>
        <a href="#footer">Are you a stylists? Sign up with us now</a>
        </Text>
    </Section1>
    <Container>
      <Section3>
        <Text as="h2" subheading>REVIEWS</Text>
      </Section3>
      <Section4>
        <Text as="h2" align="right" subheading>OUR STYLISTS</Text>
        <div>
          <Stylist>
            <figure>
              <img src="https://picsum.photos/200" alt="Rando buddo" />
            </figure>
            <Text as="h5">Wes</Text>
            <Text as="h6">Barber</Text>
          </Stylist>
          <Stylist>
            <figure>
              <img src="https://picsum.photos/200" alt="Rando buddo" />
            </figure>
            <Text as="h5">Deanna</Text>
            <Text as="h6">Stylist</Text>
          </Stylist>
          <Stylist>
            <figure>
              <img src="https://picsum.photos/200" alt="Rando buddo" />
            </figure>
            <Text as="h5">Alivia</Text>
            <Text as="h6">Stylist</Text>
          </Stylist>
        </div>
      </Section4>
    </Container>
  </Layout>
)

export default IndexPage
