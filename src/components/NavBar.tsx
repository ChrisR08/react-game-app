import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
const NavBar = () => {
  return (
    <nav>
      <HStack>
        <Image src={logo} alt={'Logo'} width={'4rem'} aspectRatio={1} />
        <Text>NavBar</Text>
      </HStack>
    </nav>
  );
};

export default NavBar;
