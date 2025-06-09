import {Menu, MenuButton, Button, MenuList, MenuItem} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';

interface Props {
  ordering?: string;
  onSelectSortOrder: (value: string) => void;
}

const SortSelector = ({ordering, onSelectSortOrder}: Props) => {
  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date Added'},
    {value: '-released', label: 'Released'},
    {value: '-metacritic', label: 'Popularity'},
  ];

  const selectedOrder = sortOrders.find((order) => order.value === ordering);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedOrder ? selectedOrder.label : 'Sort'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
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
