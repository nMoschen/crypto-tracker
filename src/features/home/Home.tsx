import styled from "styled-components"
import { CoinsList } from "../coinsList";
import { Favorites } from "../favorites";

const StyleHome = styled.main`
  padding: 40px 30px;
  display: grid;
  grid-gap: 40px;
`;

export function Home() {
  return (
    <StyleHome>
      <Favorites></Favorites>
      <CoinsList></CoinsList>
    </StyleHome>
  )
}