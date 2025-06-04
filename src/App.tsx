import {Grid, GridItem} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      <GridItem area='aside' display={{base: 'none', lg: 'block'}}>
        <Aside />
      </GridItem>

      <GridItem area='main'>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
