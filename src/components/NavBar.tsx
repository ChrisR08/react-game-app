import {HStack, Image} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
const NavBar = () => {
  return (
    <nav>
      <HStack justifyContent='space-between' padding='1rem 0.5rem'>
        <Image src={logo} alt={'Logo'} width={'4rem'} aspectRatio={1} />
        <ColorModeSwitch />
      </HStack>
    </nav>
  );
};

export default NavBar;
