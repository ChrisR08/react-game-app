import {HStack, Icon} from '@chakra-ui/react';
import Platform from '@/models/platform';
import iconMap from '@/utils/PlatformIconList';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
  return (
    <HStack gap={2.5}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.400' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
