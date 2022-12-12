import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  margin: 0 20px 20px;
  @media screen and (min-width: 600px) {
    margin: 20px;
  }
  @media screen and (min-width: 900px) {
    max-width: 900px;
    margin: 0px auto;
  }
`;
