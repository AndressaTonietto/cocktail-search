import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin: 0 20px 20px;
  @media screen and (min-width: 600px) {
    margin: 50px 20px;
  }
  @media screen and (min-width: 900px) {
    max-width: 900px;
    margin: 50px auto;
  }
  & a {
    font-size: 25px;
  }
`;
