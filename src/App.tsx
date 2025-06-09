import {Grid, GridItem} from '@chakra-ui/react';

import GenreList from './components/GenreList';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '215px 1fr',
      }}
      gap={{base: 5, md: 6, lg: 7}}
      padding={{base: 3, sm: 4, md: 8, lg: 10}}
    >
      <GridItem area='header'>
        <Header />
      </GridItem>

      <GridItem
        area='aside'
        className='wrapper'
        display={{base: 'none', lg: 'block'}}
      >
        <GenreList />
      </GridItem>

      <GridItem area='main'>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
