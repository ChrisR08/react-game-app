import usePlatforms from '@/hooks/usePlatforms';
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import iconMap from '@/helpers/iconMap';
import useGameQueryStore from '@/stores/GameQueryStore';
import {shallow} from 'zustand/shallow';
import getPlatformName from '@/helpers/get-platform-name';

const PlatformSelector = () => {
  const {gameQuery, resetPlatform, setPlatformId} = useGameQueryStore(
    (s) => ({
      gameQuery: s.gameQuery,
      resetPlatform: s.resetPlatform,
      setPlatformId: s.setPlatformId,
    }),
    shallow
  );
  const {data, error} = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.parent_platforms ? (
          <div className='wrapper wrapper-x wrapper-x-s'>
            <Icon as={iconMap[gameQuery.parent_platforms]} color='gray.400' />{' '}
            {getPlatformName(gameQuery)}
          </div>
        ) : (
          'Platforms'
        )}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => resetPlatform()}>All Platforms</MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            gap={1.5}
            onClick={() => setPlatformId(platform.id)}
          >
            <Icon as={iconMap[platform.id]} color='gray.400' />
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
