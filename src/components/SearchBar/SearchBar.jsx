import { FaSearch } from "react-icons/fa";
import { Button, Form, Input } from "./SearchBar.styled";

export const SearchBar = ({ inputValue, onSubmit, onChange }) => {
  //console.log("filter", filter,"OnSubmit", onSubmit, "onChange", onChange);
  return (
    <Form onClick={onSubmit}>
      <Button aria-label="search button">
        <FaSearch />
      </Button>
      <Input
        type="text"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain only letters, apostrophe, dash and spaces."
        required
        autoFocus
        placeholder="Search by keywords"
        onChange={onChange}
        value={inputValue}
      />
    </Form>
  );
};
