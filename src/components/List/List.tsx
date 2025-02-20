import ListItem, { ListItemProps } from "./components/ListItem";
import { StyledHeader, StyledList } from "./styles";

interface ListProps {
  items: ListItemProps[];
  title: string;
}

function List({ items, title }: ListProps) {
  return (
    <StyledList>
      <StyledHeader>{title}</StyledHeader>
      <ul>
        {items.map((item) => (
          <ListItem {...item} key={item.id} />
        ))}
      </ul>
    </StyledList>
  );
}

export default List;
