import styled from "styled-components"
import { Favorites } from "../favorites/Favorites";

const StyleHome = styled.main`
  flex: 1;
  padding: 40px 30px;
`;

export const Home = () => {
  return (
    <StyleHome>
      <Favorites></Favorites>
    </StyleHome>
  )
}