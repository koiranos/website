import React from 'react';
import styled from 'styled-components';
import Thumb from '../atoms/Thumb';

const Root = styled.div`
  position: relative;
  max-width: 50rem;
  margin: 0 auto 3rem;
  padding: 1rem 6rem 1rem 2rem;
  border-radius: var(--round-radius-1);
  box-shadow: .1rem .2rem .5rem .2rem rgba(0, 0, 0, .05);
  background: var(--color-bg);
  h5{
    color: var(--color-brand-3);
  }
  img{
    border-radius: var(--round-radius-1);
  }
`;

const Review = ({ children, ...props }) => (
  <Root>
    <Thumb {...props} />
    {children}
  </Root>
);

export default Review;
