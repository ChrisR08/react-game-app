import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton
          minWidth='100%'
          minHeight={{base: '210px', md: '230px', lg: '250px'}}
        ></Skeleton>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
