import React from 'react';
import styled from 'styled-components';

import Layout from '../templates/Layout';
import Header from '../organisms/Header';
import BGImage from '../assets/bg-lady.webp';
import Text from '../atoms/Typography';
import Container from '../utils/Container';
import Stylist from '../molecules/Stylist';
import Review from '../molecules/Review';

const Section1 = styled.section`
  --fade-bg: 255, 255, 255;
  position: relative;
  min-height: 30vh;
  padding: 3rem 2rem 1rem 1rem;
  background: url(${BGImage}) no-repeat;
  background-size: 50% auto;
  background-position: 0% 100%;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1rem;
    height: 15rem;
    background: linear-gradient(to top, rgba(var(--fade-bg), 1) 10%, rgba(var(--fade-bg), 0));
  }
  @media(min-width: 720px) {
    background-size 40rem auto;
  }
  @media(min-width: 1020px) {
    height: 60rem;
    background-size: 60% auto;
    background-position: 15% 100%;
    &::after{
      height: 25rem;
    }
  }
  @media(min-width: 1100px) {
    background-size: auto;
    padding: 5rem 8rem 1rem 2rem;
  }
  h5{
    margin-bottom: 8rem;
    background: linear-gradient(to top, #7e2169, #E62175);
    color: #000;
    text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    span{
      display: none;
    }
    @media(min-width: 1020px) {
      position: absolute;
      top: 9rem;
      left: 2rem;
      writing-mode: vertical-lr;
      transform: scale(-1);
      span{
        display: inline;
        position: relative;
        bottom: .5rem;
        background: inherit;
      }
    }
  }
`;

const Section3 = styled.section`
  padding: 15rem 0;
  > div{
    margin: 4rem 0;
    @media (min-width: 975px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 4rem;
    }
  }
`;

const Section4 = styled.section`
  padding: 6rem 0;
 > div{
    @media (min-width: 975px) {
      display: grid;
      grid-template-columns: 300px 300px 300px;
      grid-gap: calc((95vw - 915px) / 2);
    }
    @media (min-width: 1200px) {
      grid-gap: calc((1100px - 900px) / 2);
    }
 }
`;

const MidSection = styled.div`
 padding: 4rem 0;
`;

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Section1>
      <Text as="h5">
        <Text as="span">‹‹‹</Text>
        <a href="#footer">Are you a stylists? Sign up with us now</a>
      </Text>
      <Text as="h1" intro>BOOK<br /> THE BEST<br /> STYLISTS<br /> QUICKLY</Text>
    </Section1>
    <MidSection>
      <svg viewBox="0 0 1220 1308" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#f1d5e1" strokeWidth="1.5"><path d="m1218.38 822.385s-733.167-105.117-569.399 423.715c163.769 528.83 220.925 915.76-648.981 797.24" transform="matrix(.9999955602 0 0 .99999879156 .75 -813.129)"/><path d="m1187.38 823.995s-702.167-106.727-538.399 422.105c163.769 528.83 189.925 923.29-679.981 804.77" transform="matrix(.9999955602 0 0 .99999879156 31.749986108 -790.1289908126)"/><path d="m1149.38 821.957s-664.167-104.689-500.399 424.143c163.769 528.83 151.925 918.7-717.981 800.18" transform="matrix(.9999955602 0 0 .99999879156 69.749950656 -761.128822459)"/></g></svg>
      <Container>
        <section>
          <Text as="h2">Barbers</Text>
        </section>
      </Container>
    </MidSection>
    <Container>
      <Section3>
        <Text as="h2" subheading>REVIEWS</Text>
        <div>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
          <Review src="deanna.webp" alt="Rando buddo">
            <Text as="h5">Shakeera Williams</Text>
            <Text>
              I had the ultimate experience using styleq to find good stylists
              in the area.
            </Text>
          </Review>
        </div>
      </Section3>
      <Section4>
        <Text as="h2" align="right" subheading>OUR STYLISTS</Text>
        <div>
          <Stylist src="wes.webp" alt="Wes - A barber">
            <Text as="h5">Wes</Text>
            <Text as="h6">Barber</Text>
          </Stylist>
          <Stylist src="deanna.webp" alt="Deanna - A stylist">
            <Text as="h5">Deanna</Text>
            <Text as="h6">Stylist</Text>
          </Stylist>
          <Stylist src="wes.webp" alt="Alivia - A stylist">
            <Text as="h5">Alivia</Text>
            <Text as="h6">Stylist</Text>
          </Stylist>
        </div>
      </Section4>
    </Container>
  </Layout>
)

export default IndexPage
