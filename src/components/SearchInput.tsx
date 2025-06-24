import useDebounce from '@/hooks/useDebounce';
import useGameQueryStore from '@/stores/GameQueryStore';
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {BsSearch} from 'react-icons/bs';

const SearchInput = () => {
  const setSearchValue = useGameQueryStore((s) => s.setSearchValue);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    setSearchValue(debouncedSearchTerm.trim() || '');
  }, [debouncedSearchTerm]);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder='Search games'
        variant='filled'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
