import React, { useEffect } from 'react';
import styled from 'styled-components';
import Rellax from 'rellax';

import Layout from '../templates/Layout';
import Header from '../organisms/Header';
import BGImage from '../assets/bg-lady.webp';
import Text from '../atoms/Typography';
import Container from '../utils/Container';
import Stylist from '../molecules/Stylist';
import Review from '../molecules/Review';
import Feature from '../molecules/Feature';

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
  padding: 10rem 3rem;
  > div{
    margin: 4rem 0;
    @media(min-width: 720px) {
      display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 4rem;
    }
    @media (min-width: 975px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 4rem;
    }
  }
`;

const Section4 = styled.section`
  position: relative;
  padding: 2rem 0 1rem;
 > div{
    @media (min-width: 975px) {
      display: grid;
      grid-template-columns: 300px 300px 300px;
      grid-gap: 20px calc((95vw - 915px) / 2);
    }
    @media (min-width: 1200px) {
      grid-gap: 20px calc((1100px - 900px) / 2);
    }
 }
 > svg{
   position: absolute;
   z-index: -1;
   width: 6rem;
   height: 6rem;
   fill: var(--color-brand-2);
   opacity: .7;
   bottom: 0;
   &:first-of-type{
    top: 0;
    left: -5vw;
   }
   &:nth-of-type(2){
    bottom: 0;
    right: 0;
   }
   &:nth-of-type(3) {
     bottom: -680px;
     left: 45vw;
   }
   &:nth-of-type(4) {
    top: 90px;
    right: -8vw;
   }
   &:nth-of-type(5) {
    bottom: 90px;
    left: -5vw;
   }
   &:nth-of-type(6) {
    bottom: -800;
    right: -6vw;
   }
   &:nth-of-type(7) {
    top: 120px;
    left: -10vw;
   }
   &:nth-of-type(8) {
    right: -4vw;
   }
   &:last-of-type{
     bottom: -700px;
     left: -4vw;
   }
 }
`;

const MidSection = styled.div`
 position: relative;
 padding: 4rem 0;
 svg{
   position: absolute;
   width: 100vw;
   height: 100%;
   z-index: -10;
 }
`;

const Features = styled.div`
  width: 95vw;
  margin: 5rem auto;
  padding: 4rem 2rem 2rem;
  max-width: var(--site-width);
  @media(min-width: 520px) {
    margin: 10rem 0;
    padding: 8rem 4rem 2rem;
  }
`;

const IndexPage = () => {
  useEffect(() => {
    new Rellax('.rellax', { speed: 2 });
  }, []);
  return (
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
        <svg viewBox="0 0 2000 1308" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path fill="none" d="M0 0h2000v1308H0z"/><clipPath id="a"><path d="M0 0h2000v1308H0z"/></clipPath><g clipPath="url(#a)"><path d="M1218.38 822.385S485.213 717.268 648.981 1246.1C812.75 1774.93 869.906 2161.86 0 2043.34" fill="none" stroke="#f1d5e1" strokeWidth="1.5" transform="matrix(1.64091 0 0 1 .75 -813.129)"/><path d="M1187.38 823.995S485.213 717.268 648.981 1246.1C812.75 1774.93 838.906 2169.39-31 2050.87" fill="none" stroke="#f1d5e1" strokeWidth="1.5" transform="matrix(1.64091 0 0 1 51.619 -790.129)"/><path d="M1149.38 821.957S485.213 717.268 648.981 1246.1C812.75 1774.93 800.906 2164.8-69 2046.28" fill="none" stroke="#f1d5e1" strokeWidth="1.5" transform="matrix(1.64091 0 0 1 113.973 -761.129)"/></g></svg>
        <Container>
          <Features>
            <Feature image="feature-1.webp" origin="left">
              <Text as="h2" truncate="break">Barbers</Text>
              <Text as="h4" weight="300">A variety of skilled barbers for kids and adult men.</Text>
            </Feature>
            <Feature image="feature-2.webp" origin="right">
              <Text as="h2" truncate="break">Hairstylists/Haircuts</Text>
              <Text as="h4" weight="300">Professional stylists giving you just your desired hair look.</Text>
            </Feature>
            <Feature image="feature-3.webp" origin="left">
              <Text as="h2" truncate="break">Braids/Locks</Text>
              <Text as="h4" weight="300">Get braids and updos for any hair type. We make it look great on you.</Text>
            </Feature>
            <Feature image="feature-4.webp" origin="right">
              <Text as="h2" truncate="break">Blowouts</Text>
              <Text as="h4" weight="300">You get a blowout so good it makes you want to go out.</Text>
            </Feature>
          </Features>
        </Container>
      </MidSection>
      <Container>
        <Section3>
          <Text as="h2" subheading className="rellax" data-rellax-speed="2.2">REVIEWS</Text>
          <div className="rellax" data-rellax-speed="2">
            <Review src="anon.webp" alt="Rando buddo">
              <Text as="h5">Nikhil</Text>
              <Text>
               Booking online was easy and the haircut was better than I was expecting. Great salon!
              </Text>
            </Review>
            <Review src="reviewer-2.webp" alt="Rando buddo">
              <Text as="h5">Molly</Text>
              <Text>
                Alivia did a fantastic job. She asked a lot of questions to make sure we were on the same page, and then executed perfection.
              </Text>
            </Review>
            <Review src="reviewer-3.webp" alt="Rando buddo">
              <Text as="h5">Matt</Text>
              <Text>
                Going into my appointment, I wasn't sure what to expect. Howver, after the consultation process, my needs were met and exceeded.
              </Text>
            </Review>
            <Review src="anon.webp" alt="Rando buddo">
              <Text as="h5">Nic</Text>
              <Text>
              StyleQ made it extremely easy for me to find a stylist that was able to help me decide on a style that fit my looks.
              </Text>
            </Review>
            <Review src="deanna.webp" alt="Rando buddo">
              <Text as="h5">Deanna</Text>
              <Text>
                I had the ultimate experience using styleq to find clients
                in the area.
              </Text>
            </Review>
            <Review src="alivia.webp" alt="Rando buddo">
              <Text as="h5">Alivia</Text>
              <Text>
                StyleQ connects me so easily with clients and gives me an opportunity to
                build my network.
              </Text>
            </Review>
          </div>
        </Section3>
        <Section4>
          {
            [1,2,3].map(item => (
            <svg id="scissor" key={item} fillRule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="rellax" data-rellax-speed="4.8"><path d="M0 0h24v24H0z" fill="none"/><g><path d="M12 9.524l7.324-8.03s1.592 4.133-.095 6.186c-.748.91-2.58 2.96-4.387 4.96l1.274 1.397c1.463-.165 3.221.51 4.596 1.913 2.037 2.079 2.465 4.975.953 6.462-1.512 1.486-4.393 1.005-6.431-1.074-1.197-1.222-1.838-2.725-1.857-4.059-.286-.312-.773-.845-1.377-1.508-.604.663-1.091 1.196-1.377 1.508-.019 1.334-.66 2.837-1.857 4.059-2.038 2.079-4.919 2.56-6.431 1.074-1.512-1.487-1.084-4.383.953-6.462 1.375-1.403 3.133-2.078 4.596-1.913l1.274-1.397c-1.807-2-3.639-4.05-4.387-4.96-1.687-2.053-.095-6.186-.095-6.186zm-3.021 6.107c1.133 1.114.73 3.369-.899 5.032s-3.872 2.108-5.005.994c-1.133-1.115-.73-3.37.899-5.032 1.629-1.663 3.872-2.109 5.005-.994zm6.042 0c-1.133 1.114-.73 3.369.899 5.032s3.872 2.108 5.005.994c1.133-1.115.73-3.37-.899-5.032-1.629-1.663-3.872-2.109-5.005-.994zm-.465-2.674c-.794.878-1.572 1.734-2.239 2.466l1.101 1.217c.101-.682.385-1.294.863-1.764a2.951 2.951 0 011.341-.748zm1.063-1.906c1.459-1.63 2.779-3.121 3.282-3.736 1.354-1.654.132-4.899.132-4.899l-6.749 7.419.005.005-.284.312-.005-.005-2.231 2.452.004.004-.326.358-.003-.004-1.066 1.171c.509.133.967.38 1.341.748.478.47.762 1.082.863 1.764l1.101-1.217-.003-.003.316-.351.004.004c.651-.72 1.431-1.584 2.231-2.474l-.002-.002.285-.317.002.002.541-.603.565-.626zm-3.903-1.216L4.967 2.416s-1.222 3.245.132 4.899c.629.767 2.529 2.901 4.385 4.967z"/><circle cx="11.838" cy="12.76" r=".478"/></g></svg>
            ))
          }
          {
            [1,2,3].map(item => (
            <svg id="hairdryer" key={item} fillRule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="rellax" data-rellax-speed="3.5"><path d="M0 0h24v24H0z" fill="none"/><g><path d="M3.021 10.093a5.266 5.266 0 01-.032-.579c0-2.714 2.12-4.917 4.731-4.917 1.445-.105 9.599 2.459 9.599 2.459v4.916S8.52 14.429 7.73 14.43c-1.368 1.483-.255 3.867.206 4.358.532.564.846.006.611.947s-2.876.167-3.671-.5c-1.273-1.362-1.737-7.261-1.855-9.142zm.443 1.57c.073.81.578 6.065 1.585 7.254.573.574 2.926 1.302 3.119.758.267-.754-.257-.221-.638-.668-.382-.448-1.825-3.392-.226-4.595-1.54.059-3.317-1.179-3.84-2.749zm13.097-.136s-7.122 1.893-8.584 2.092c-2.335 0-4.231-1.875-4.231-4.184S5.605 5.504 7.94 5.481c.986-.015 8.604 2.04 8.604 2.04zM18.315 8.985h3.305v.45h-3.305zM18.315 7.985h3.305v.45h-3.305zM18.315 9.985h3.305v.45h-3.305z"/><path d="M7.405 7.262c1.2 0 2.174.974 2.174 2.173a2.175 2.175 0 01-4.347 0c0-1.199.974-2.173 2.173-2.173zm0 .474a1.7 1.7 0 110 3.399 1.7 1.7 0 010-3.399z"/><circle cx="5.108" cy="15.476" r=".237"/><circle cx="5.469" cy="17.071" r=".237"/></g></svg>
            ))
          }
          {
            [1,2,3].map(item => (
            <svg key={item} id="lipstick" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="rellax" data-rellax-speed="3"><g><path d="M17.238 13.698v9.73H6.762v-9.73zm-.875.747H7.494v8.237h8.869z"/><path d="M16.503 11.016v3.107H7.497v-3.107zm-.382.238H7.842l.01 2.631h8.253z"/><path d="M8.692.572c2.29.791 4.298 1.921 5.983 3.443v7.24H8.692zm.46 1.002l-.035 9.442h5.084l.043-6.64c-1.664-1.62-3.359-2.619-5.093-2.802z"/></g></svg>
            ))
          }
          <Text as="h2" align="right" subheading className="rellax" data-rellax-speed="1.3">OUR TOP STYLISTS</Text>
          <div className="rellax" data-rellax-speed="1.4">
            <Stylist src="wes.webp" alt="Wes - A barber">
              <Text as="h5">Wes</Text>
              <Text as="h6">Barber</Text>
            </Stylist>
            <Stylist src="deanna.webp" alt="Deanna - A stylist">
              <Text as="h5">Deanna</Text>
              <Text as="h6">Stylist</Text>
            </Stylist>
            <Stylist src="alivia.webp" alt="Alivia - A stylist">
              <Text as="h5">Alivia</Text>
              <Text as="h6">Stylist</Text>
            </Stylist>
            <Stylist src="markia.webp" alt="Alivia - A stylist">
              <Text as="h5">Markia</Text>
              <Text as="h6">Stylist</Text>
            </Stylist>
            <Stylist src="arkeen.webp" alt="Alivia - A stylist">
              <Text as="h5">Arkeen</Text>
              <Text as="h6">Barber</Text>
            </Stylist>
            <Stylist empty />
          </div>
        </Section4>
      </Container>
    </Layout>
  );
};

export default IndexPage
