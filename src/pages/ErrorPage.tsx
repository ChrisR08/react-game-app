import {isRouteErrorResponse, useRouteError} from 'react-router-dom';
import Header from '@/components/Header';
import {GAP, PADDING} from '@/styles/constants';
import {Box, Heading} from '@chakra-ui/react';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box className='wrapper' gap={GAP} padding={PADDING}>
      <Header />
      <Heading as='h1'>Oops</Heading>
      <p>
        {isRouteErrorResponse(error)
          ? 'Sorry, that page could not be found.'
          : `Sorry, an unexpected error occured. ${error}.`}
      </p>
    </Box>
  );
};

export default ErrorPage;
