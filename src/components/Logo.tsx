import {COL_1_WIDTH} from '@/styles/constants';
import {Box, Icon} from '@chakra-ui/react';
import {SlGameController} from 'react-icons/sl';
import {Link} from 'react-router-dom';

interface Props {
  width: string;
  height: string;
  url: string;
}

const Logo = ({width, height, url}: Props) => {
  return (
    <Box minWidth={{lg: COL_1_WIDTH}}>
      <Link to={url}>
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
