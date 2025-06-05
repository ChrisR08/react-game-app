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
      templateColumns={{
        base: '1fr',
        lg: '180px 1fr',
      }}
      gap={{base: 4, md: 5, lg: 6}}
      padding={{base: 2, sm: 3, md: 4, lg: 5}}
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
