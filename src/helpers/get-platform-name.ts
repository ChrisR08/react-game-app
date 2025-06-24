import platforms from '@/data/platforms';
import {GameQuery} from '@/stores/GameQueryStore';

const getPlatformName = (gameQuery: GameQuery): string => {
  const currentPlatform = platforms.filter(
    (platform) => platform.id === gameQuery.parent_platforms
  );

  return currentPlatform[0] ? currentPlatform[0].name : '';
};

export default getPlatformName;
