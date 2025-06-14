import {Grid, GridItem} from '@chakra-ui/react';

import GenreList from './components/GenreList';
import Main from './components/Main';
import Header from './components/Header';
import {COL_1_WIDTH, GAP} from './constants/styles';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: `${COL_1_WIDTH} 1fr`,
      }}
      gap={GAP}
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
