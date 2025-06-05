import {HStack, Image} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent='space-between'>
        <Image src={logo} alt={'Logo'} maxWidth={'4rem'} aspectRatio={1} />
        <ColorModeSwitch />
      </HStack>
    </nav>
  );
};

export default NavBar;
