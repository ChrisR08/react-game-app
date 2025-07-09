import Header from '@/components/Header';
import {GAP, PADDING} from '@/styles/constants';
import {Box} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <Box className='wrapper' gap={GAP} padding={PADDING}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
