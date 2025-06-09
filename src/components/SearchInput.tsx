import useDebounce from '@/hooks/useDebounce';
import useGameQuery from '@/hooks/useGameQuery';
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {BsSearch} from 'react-icons/bs';

const SearchInput = () => {
  const {setGameQuery} = useGameQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  useEffect(() => {
    setGameQuery((prev) => ({
      ...prev,
      search: debouncedSearchTerm.trim() || '',
    }));
  }, [debouncedSearchTerm]);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder='Search all games'
        variant='filled'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
