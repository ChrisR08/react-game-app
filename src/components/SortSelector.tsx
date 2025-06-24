import useGameQueryStore from '@/stores/GameQueryStore';
import {Menu, MenuButton, Button, MenuList, MenuItem} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import {shallow} from 'zustand/shallow';

const SortSelector = () => {
  const {gameQuery, setOrder} = useGameQueryStore(
    (s) => ({gameQuery: s.gameQuery, setOrder: s.setOrder}),
    shallow
  );

  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date Added'},
    {value: '-released', label: 'Released'},
    {value: '-metacritic', label: 'Popularity'},
  ];

  const selectedOrder = sortOrders.find(
    (order) => order.value === gameQuery.ordering
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder ? selectedOrder.label : 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => setOrder(order.value)}
            fontSize={14}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
