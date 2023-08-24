import { FaSearch } from "react-icons/fa";
import { Button, Form, Input } from "./SearchBar.styled";
import { useState } from "react";

export const SearchBar = ({ changeQuery }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeQuery(search);
  };

  return (
    <Form onClick={onSubmit}>
      <Button aria-label="search button" type="submit">
        <FaSearch />
      </Button>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search by keywords"
        onChange={onChange}
        value={search}
      />
    </Form>
  );
};
