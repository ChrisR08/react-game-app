import {useState} from 'react';
import {Grid, GridItem, Heading} from '@chakra-ui/react';

import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import FilterBar from './components/FilterBar';
import {Genre} from './models/genre';

function App() {
  const [selectedgenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '215px 1fr',
      }}
      gap={{base: 5, md: 6, lg: 7}}
      padding={{base: 2, sm: 4, md: 8, lg: 10}}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      <GridItem area='aside' display={{base: 'none', lg: 'block'}}>
        <aside className='wrapper'>
          <GenreList
            selectedgenre={selectedgenre}
            onSelectGenre={onSelectGenre}
          />
        </aside>
      </GridItem>

      <GridItem area='main'>
        <main className='wrapper'>
          <Heading fontSize='5xl'>
            {selectedgenre?.name ? selectedgenre.name : 'Games'}
          </Heading>
          <FilterBar />
          <GameGrid genreSlug={selectedgenre?.slug} />
        </main>
      </GridItem>
    </Grid>
  );
}

export default App;
