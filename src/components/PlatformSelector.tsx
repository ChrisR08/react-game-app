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

const PlatformSelector = () => {
  const {data: platforms, error} = usePlatforms();
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform Selector
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} gap={1.5}>
            <Icon as={iconMap[platform.slug]} color='gray.400' />
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
