import React from 'react';
import styled, { css } from 'styled-components';

const TextBoxStyle = styled.input`
  height: 4rem;
  padding: 1rem;
  border: 0;
  border-radius: var(--round-radius-1);
  background: #fff;
  &:focus{
    box-shadow: 0 0 .3rem var(--color-focus);
  }
  ${({ block }) => block && css`
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
  `}
`;

export const TextBox = ({ type = "text", ...props }) => (
  <TextBoxStyle type={type} {...props} />
);

export const TextArea = styled.textarea``;

export const Checkbox = styled.input``;

export const Radio = styled.input``;