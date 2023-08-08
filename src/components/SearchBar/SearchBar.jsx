import { FaSearch } from "react-icons/fa";
import { Button, Form, Input } from "./SearchBar.styled";

export const SearchBar = ({ inputValue, onSubmit, onChange }) => {
  return (
    <Form onClick={onSubmit}>
      <Button aria-label="search button" type="button">
        <FaSearch />
      </Button>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search by keywords"
        onChange={onChange}
        value={inputValue}
      />
    </Form>
  );
};
