import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Kite from '../atoms/Kite';

const Root = styled.div`
  --backdrop-offset: 5rem;
  --kite-margin: 10rem;
  display: flex;
  width: 100%;
  &:not(:last-of-type){
    margin-bottom: 15rem;
  }
  h2{
    color: var(--color-brand-2);
  }
  > div:first-of-type{
    position: relative;
    width: 8rem;
    height: 8rem;
    > div{
      width: 100%;
      height: 100%;
      transform: rotate(-45deg);
      overflow: hidden;
      img{
        transform: rotate(45deg) translateX(-50%) scale(.5);
        @media(min-width: 520px) {
          transform: rotate(45deg) translateX(-22%);
        }
      }
    }
    > span{
      position: absolute;
      top: 0;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      background: var(--color-brand-2);
      background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .5));
      transform: rotate(-45deg);
      transition: transform .5s var(--animation-easing);
      ${({ origin }) => origin === 'left' && css`
        left: var(--backdrop-offset);
      `}
      ${({ origin }) => origin === 'right' && css`
        right: var(--backdrop-offset);
      `}
    }
    ${({ origin }) => origin === 'left' && css`
      margin-right: var(--kite-margin);
    `}
    ${({ origin }) => origin === 'right' && css`
      margin-left: var(--kite-margin);
    `}
    @media(min-width: 520px) {
      width: 18rem;
      height: 18rem;
    }
    &:hover{
      span{
        transform: rotate(-225deg);
      }
    }
  }
  > div:last-of-type{
    margin-top: -2rem;
  }
  ${({ origin }) => origin && css`
    text-align: ${origin};
  `}
  ${({ origin }) => origin === 'right' && css`
    justify-content: flex-end;
    > :last-child{
      order: -1;
    }
  `}
  @media (min-width: 1020px) {
    &:not(:last-of-type){
      margin-bottom: 22rem;
    }
  }
`;

const Feature = ({ children, origin, image }) => (
  <Root origin={origin} className='rellax'>
    <div>
      <div><Kite src={image} alt="Featured image" /></div>
      <span />
    </div>
    <div>
      {children}
    </div>
  </Root>
);


Feature.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default Feature;
