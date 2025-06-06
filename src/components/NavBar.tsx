import {Box, calc, HStack, Image} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent='space-between' gap={{base: 5, md: 6, lg: 7}}>
        <Box minWidth='215px'>
          <Image src={logo} alt={'Logo'} maxWidth={'4rem'} aspectRatio={1} />
        </Box>

        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </nav>
  );
};

export default NavBar;
