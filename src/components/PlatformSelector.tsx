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
import iconMap from '@/utils/PlatformIconList';
import Platform from '@/models/platform';

interface Props {
  selectedPlatform: Platform | null;
  handlePlatformClick: (selectedPlatform: Platform) => void;
}

const PlatformSelector = ({selectedPlatform, handlePlatformClick}: Props) => {
  const {data: platforms, error} = usePlatforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? (
          <div className='wrapper wrapper-x wrapper-x-s'>
            <Icon as={iconMap[selectedPlatform.slug]} color='gray.400' />{' '}
            {selectedPlatform?.name}
          </div>
        ) : (
          'Platforms'
        )}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            gap={1.5}
            onClick={() => handlePlatformClick(platform)}
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
