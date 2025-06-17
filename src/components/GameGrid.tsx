import React from 'react';
import {Box, SimpleGrid, Text} from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';

import GameCardSkeleton from './GameCardSkeleton';
import GameCard from './GameCard';
import useGames from '@/hooks/useGames';
import {range} from '@/helpers/range';
import useGameQuery from '@/hooks/useGameQuery';
import {GAP} from '@/styles/constants';

const GameGrid = () => {
  const {gameQuery} = useGameQuery();
  const {data, error, isLoading, fetchNextPage, hasNextPage} =
    useGames(gameQuery);

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box width='100%'>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
        hasMore={!!hasNextPage}
        loader={null}
        scrollableTarget='scrollableDiv'
      >
        <SimpleGrid
          minWidth='100%'
          alignItems={'stretch'}
          columns={{base: 1, sm: 2, lg: 3}}
          gap={GAP}
        >
          {isLoading &&
            range(9).map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {!isLoading && data?.pages.length === 0 && (
            <Text>
              Sorry, no games were found matching your search/filters.
            </Text>
          )}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
