import styled from "styled-components";

const StyledIsFavorite = styled.img`
  background-color: red;
`;

export const TileIsFavorite = ({ isFavorite }: { isFavorite: boolean }) => {
  return (
    <StyledIsFavorite></StyledIsFavorite>
  )
}