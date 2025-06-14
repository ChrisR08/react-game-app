import usePlatforms from '@/hooks/usePlatforms';
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import iconMap from '@/helper/iconMap';
import useGameQuery from '@/hooks/useGameQuery';
import Platform from '@/models/platform';

const PlatformSelector = () => {
  const {
    gameQuery: {platform},
    setGameQuery,
  } = useGameQuery();
  const {data, error} = usePlatforms();

  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery((prev) => ({...prev, platform}));
  };

  const handleResetPlatform = () => {
    setGameQuery((prev) => {
      const {platform, ...rest} = prev;
      return rest;
    });
  };

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? (
          <div className='wrapper wrapper-x wrapper-x-s'>
            <Icon as={iconMap[platform.slug]} color='gray.400' />{' '}
            {platform?.name}
          </div>
        ) : (
          'Platforms'
        )}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleResetPlatform}>All Platforms</MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            gap={1.5}
            onClick={() => handleSelectPlatform(platform)}
          >
            <Icon as={iconMap[platform.slug]} color='gray.400' />
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
