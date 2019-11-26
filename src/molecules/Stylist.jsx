import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/Image';

const Root = styled.div`
  width: 300px;
  margin: 6rem auto;
  img{
    width: 27rem;
    height: 35rem;
    object-fit: cover;
    box-shadow: .2rem .4rem .5rem rgba(0, 0, 0, .4);
    filter: grayscale(90%);
  }
  h5{
    color: var(--color-brand-2);
  }
`;

const Frame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1.4rem;
  width: 100%;
  height: 38rem;
  overflow: hidden;
  svg{
    position: absolute;
    top: 0;
    left: 0;
    line{
      stroke-width: 10;
      stroke: var(--color-brand-2);
      fill: none;
      transition: transform .6s ease-out;
    }
  }
  .top, .bottom{
    stroke-dasharray: 300;
  }
  .right, .left{
    stroke-dasharray: 380;
  }
  &:hover{
    .top{
      transform: translateX(-600px);
    }
    .bottom{
      transform: translateX(600px);
    }
    .left{
      transform: translateY(760px);
    }
    .right{
      transform: translateY(-760px);
    }
    img{
      filter: none;
    }
  }
`;

const Stylist = ({ children, ...props }) => {

  return (
    <Root>
      <Frame>
        <svg width="300" height="380">
          <line className="top" x1="0" y1="0" x2="900" y2="0" />
          <line className="left" x1="0" y1="380" x2="0" y2="-980"/>
          <line className="bottom" x1="300" y1="380" x2="-900" y2="380"/>
          <line className="right" x1="300" y1="0" x2="300" y2="1200"/>
        </svg>
      {/* <img src={src} alt={alt} /> */}
        <Image {...props} width="270" height="350" />
      </Frame>
      { children }
    </Root>
  );
};

export default Stylist;