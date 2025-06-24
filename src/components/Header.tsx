import {Box} from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import Logo from './Logo';
import {GAP} from '@/styles/constants';

const Header = () => {
  return (
    <Box
      as='header'
      width='100%'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      gap={GAP}
    >
      <Logo width={'4rem'} height={'4rem'} url={'/'} />
      <SearchInput />
      <ColorModeSwitch />
    </Box>
  );
};

export default Header;
