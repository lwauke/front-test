import ListItem, { ListItemProps } from "./components/ListItem";
import { ListContainer, StyledHeader } from "./styles";

interface ListProps {
  items: ListItemProps[];
  title: string;
}

function List({ items, title }: ListProps) {
  return (
    <ListContainer>
      <StyledHeader>{title}</StyledHeader>
      <ul>
        {items.map((item) => (
          <ListItem {...item} key={item.id} />
        ))}
      </ul>
    </ListContainer>
  );
}

export default List;
