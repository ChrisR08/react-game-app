import {Box, Heading, List} from '@chakra-ui/react';
import {ReactNode} from 'react';

interface Props {
  heading?: string;
  children: ReactNode | ReactNode[];
}

const UnorderedList = ({heading, children, ...rest}: Props) => {
  if (!children) {
    console.error('Add children to the UnorderedList component');
    return null;
  }

  return (
    <Box as='section' display='flex' flexDirection='column' gap={2} {...rest}>
      {heading && (
        <Heading as='h2' fontSize='2xl' color='gray.600'>
          {heading}
        </Heading>
      )}
      <List>{children}</List>
    </Box>
  );
};

export default UnorderedList;
