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
  ${({ cta }) => cta && css`
    position: relative;
    height: 4.5rem;
    background: var(--color-brand-2);
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, .5));
    color: #fff;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: inherit;
      border: solid .2rem var(--color-brand-2);
      box-sizing: border-box;
      transform: translate3d(.6rem, .6rem, 0);
      transition: transform 500ms var(--animation-easing);
      will-change: transform;
    }
    &:hover{
      &::after{
        transform: translate3d(0, 0, 0);
      }
    }
  `}
`;

export default Button;