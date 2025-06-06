import {useState} from 'react';
import {Grid, GridItem} from '@chakra-ui/react';

import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import {Genre} from './models/genre';
import Main from './components/Main';

function App() {
  const defaultGenre: Genre = {
    id: 1,
    name: '',
    slug: '',
    image_background: '',
  };

  const [selectedGenre, setSelectedGenre] = useState<Genre>(defaultGenre);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const resetGenre = () => {
    setSelectedGenre(defaultGenre);
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
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </aside>
      </GridItem>

      <GridItem area='main'>
        <Main selectedGenre={selectedGenre} resetGenre={resetGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
