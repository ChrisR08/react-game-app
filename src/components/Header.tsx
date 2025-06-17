import {Box, HStack, Icon} from '@chakra-ui/react';
import {SlGameController} from 'react-icons/sl';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import {COL_1_WIDTH} from '@/styles/constants';

const Header = () => {
  return (
    <header>
      <HStack justifyContent='space-between' gap={{base: 5, md: 6, lg: 7}}>
        <Box minWidth={{lg: COL_1_WIDTH}}>
          <Icon
            as={SlGameController}
            width='3rem'
            height='3rem'
            aspectRatio={1}
          />
        </Box>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </header>
  );
};

export default Header;
