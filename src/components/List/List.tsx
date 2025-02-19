import ListItem, { ListItemProps } from "./components/ListItem";
import { StyledHeader } from "./styles";

interface ListProps {
  items: ListItemProps[];
  title: string;
}

function List({ items, title }: ListProps) {
  return (
    <div>
      <StyledHeader>{title}</StyledHeader>
      <ul>
        {items.map((item) => (
          <ListItem {...item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
