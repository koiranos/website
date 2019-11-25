import styled from 'styled-components';

const Stylist = styled.div`
  width: 300px;
  margin: 6rem auto;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: .2rem .4rem .5rem rgba(0, 0, 0, .4);
    filter: grayscale(80%);
  }
  figure{
    margin: 0;
    padding: 1.4rem;
    width: 100%;
    height: 38rem;
    border: solid medium var(--color-brand-2);
    &:hover{
      img{
        // 270x350
        filter: none;
      }
    }
  }
  h5{
    color: var(--color-brand-2);
  }
`;

export default Stylist;