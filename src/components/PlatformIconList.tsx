import {HStack, Icon} from '@chakra-ui/react';
import iconMap from '@/helpers/iconMap';
import {Platform} from '@/hooks/usePlatforms';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
  return (
    <HStack gap={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.id]} color='gray.400' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
