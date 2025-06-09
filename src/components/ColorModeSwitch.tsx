import {FormControl, FormLabel, Switch, useColorMode} from '@chakra-ui/react';

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
        colorScheme='green'
      />
      <FormLabel
        htmlFor='toggle-theme'
        mb={0}
        display={{base: 'none', md: 'block'}}
      >
        {colorMode === 'dark' ? 'Dark' : 'Light'} Mode
      </FormLabel>
    </FormControl>
  );
};

export default ColorModeSwitch;
