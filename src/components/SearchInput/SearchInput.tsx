import { ChangeEvent } from "react";
import { StyledIcon, StyledSearchInput } from "./styles";
import SearchIcon from "../../assets/search-icon.svg"

interface SearchIputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ onChange }: SearchIputProps) {
  return (
    <div className="relative">
      <StyledIcon src={SearchIcon} alt="Ícone de busca" />
      <StyledSearchInput type="text" onChange={onChange} />
    </div>
  )
}

export default SearchInput