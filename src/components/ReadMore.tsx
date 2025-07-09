import {useState} from 'react';
import {Button, Text} from '@chakra-ui/react';
import {PRIMARY_COLOR} from '@/styles/constants';

interface Props {
  excerptLength: number;
  children: string;
}

const ReadMore = ({excerptLength = 300, children}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  if (children.length > excerptLength) {
    // Create text that is either the the passed or default length
    const excerpt = children.substring(0, excerptLength);

    const visibleText = isExpanded ? children : `${excerpt}...`;

    return (
      <Text>
        {visibleText}
        <Button
          size='sm'
          marginLeft={1.5}
          backgroundColor='#C6F6D5'
          color={PRIMARY_COLOR}
          fontWeight='bold'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Hide text' : 'Read more'}
        </Button>
      </Text>
    );
  }

  return <Text>{children}</Text>;
};

export default ReadMore;
