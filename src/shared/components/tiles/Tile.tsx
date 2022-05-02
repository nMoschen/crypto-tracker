import styled from "styled-components"
import { ITile } from "./ITile";
import { TileIsFavorite } from "./TileIsFavorite";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .875rem;
  justify-content: center;
  background-color: rgba(217, 241, 255, 0.1);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

const StyledImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  margin: 1.25rem 0 0 0;
`;

const StyledSubTitle = styled.p`
  font-size: .875rem;
  margin: .5rem 0 0 0;
`;

export const Tile = ({ title, subtitle, isFavorite, imageUrl }: ITile) => {
  return (
    <StyledTile>
      <TileIsFavorite isFavorite={isFavorite}></TileIsFavorite>
      <StyledImage>
        <img src={imageUrl}></img>
      </StyledImage>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
    </StyledTile>
  )
}