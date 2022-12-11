import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin: 0 20px 20px;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin: 20px;
  }
  @media screen and (min-width: 900px) {
    max-width: 900px;
    margin: 20px auto;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  position: relative;
  border-radius: 10px;
  width: fit-content;
  overflow: hidden;
  margin: 0 auto;
`;

export const StyledImg = styled.img`
  align-self: center;
`;

export const ImgGradient = styled.div`
  position: absolute;
  background-image: linear-gradient(
    rgba(255, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1) 99%
  );
  height: 100%;
  width: 100%;
`;

export const CocktailLabel = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
`;
