import {
  FormControl,
  FormLabel,
  Icon,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import {FiSun, FiMoon} from 'react-icons/fi';

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <FormControl
      display='flex'
      width='100%'
      maxWidth='fit-content'
      alignItems='center'
      gap='8px'
    >
      <Switch
        id='toggle-theme'
        size='md'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <FormLabel
        htmlFor='toggle-theme'
        mb={0}
        display={{base: 'none', md: 'flex'}}
        alignItems='center'
      >
        {colorMode === 'dark' ? (
          <Icon as={FiSun} width='20px' height='20px' />
        ) : (
          <Icon as={FiMoon} width='20px' height='20px' />
        )}
      </FormLabel>
    </FormControl>
  );
};

export default ColorModeSwitch;
