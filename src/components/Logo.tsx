import {COL_1_WIDTH} from '@/styles/constants';
import {Box, Icon, Link} from '@chakra-ui/react';
import {SlGameController} from 'react-icons/sl';

interface Props {
  width: string;
  height: string;
  url: string;
}

const Logo = ({width, height, url}: Props) => {
  return (
    <Box minWidth={{lg: COL_1_WIDTH}}>
      <Link href={url}>
        <Icon
          as={SlGameController}
          width={width}
          height={height}
          aspectRatio={1}
        />
      </Link>
    </Box>
  );
};

export default Logo;
