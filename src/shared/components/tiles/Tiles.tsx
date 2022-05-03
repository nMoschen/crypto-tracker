import { useState } from "react";
import styled from "styled-components"
import { Tile } from "./Tile";
import ethLogo from '../../../assets/logos/eth.svg';
import { ITile } from "./ITile";

const StyledTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const Tiles = () => {
  const test: ITile[] = [
    { title: 'USD 3250', subtitle: '15%', isFavorite: true, imageUrl: ethLogo }
  ];
  const [tiles, setTiles] = useState<ITile[]>(test);

  return (
    <StyledTiles>
      { tiles.map((tile, i) => <Tile {...tile} key={i}></Tile>)}
    </StyledTiles>
  )
}