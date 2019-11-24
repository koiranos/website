import React from 'react';
import styled from 'styled-components';

const Root = styled.header`
  height: 6rem;
  padding: 1rem;
  border-left: solid 2rem var(--color-brand-2);
`;

const Header = () => (
  <Root>
    <span>StyleQ</span>
  </Root>
);

export default Header;
