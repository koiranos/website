import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import Layout from '../templates/Layout';
import Header from '../organisms/Header';
import BGImage from '../assets/bg-lady.jpg';
import Text from '../atoms/Typography';

const TextMotion = keyframes`
  to{
    background-position: 200% center;
  }
`;

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
    animation: ${TextMotion} 1s linear infinite;
    span{
      position: relative;
      bottom: .5rem;
      background: inherit;
    }
  }
`;

const IndexPage = () => (
  <Layout title="Home">
    <Header />
    <Section1>
      <Text as="h1" intro>BOOK<br /> THE BEST<br /> STYLISTS<br /> QUICKLY</Text>
      <Text as="h5"><Text as="span">‹‹‹</Text> Are you a stylists? Sign up with us now</Text>
    </Section1>
    <p>Welcome to your new site.</p>
    <p>Now go do something great.</p>
    <Link to="/booking/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
