import styled, { css } from 'styled-components';

const Button = styled.button`
  --button-bg: rgba(0, 0, 0, .2);
  --button-fg: #222;
  display: inline-block;
  min-width: 10rem;
  padding: 1rem 2rem;
  border: 0;
  background: var(--button-bg);
  color: var(--button-fg);
  text-align: center;
  cursor: pointer;
  + a, + button{
    margin-left: 1rem;
  }
  ${({ curvy }) => curvy && css`
    border-radius: .4rem;
  `}
`;

export default Button;