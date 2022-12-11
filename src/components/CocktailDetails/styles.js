import styled from '@emotion/styled';

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  @media screen and (min-width: 600px) {
    margin: 20px;
  }
  @media screen and (min-width: 900px) {
    max-width: 900px;
    margin: 0px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
    font-size: 25px;
  }
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
    font-size: 25px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  @media screen and (min-width: 600px) {
    margin-top: auto;
  }
`;

export const Tag = styled.div`
  background-color: black;
  color: white;
  width: fit-content;
  padding: 5px 20px;
  border-radius: 2px;
  height: fit-content;
`;
