import {HStack} from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <HStack justifyContent='space-between' gap={{base: 5, md: 6, lg: 7}}>
        <Logo width={'4rem'} height={'4rem'} url={'/'} />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </header>
  );
};

export default Header;
