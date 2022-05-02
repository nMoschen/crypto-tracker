import styled from 'styled-components';
import { Home } from './features/home/Home';
import { Navbar } from './features/navbar/Navbar';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <Navbar></Navbar>
      <Home></Home>
    </StyledApp>
  );
}

export default App;
