import GenreList from '@/components/GenreList';
import Main from '@/components/Main';
import {COL_1_WIDTH, GAP} from '@/styles/constants';
import {Grid, GridItem} from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: `${COL_1_WIDTH} 1fr`,
      }}
      width='100%'
      gap={GAP}
    >
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
};

export default HomePage;
