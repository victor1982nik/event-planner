import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, ClearBtn, Form, Input, CloseIcon } from "./SearchBar.styled";

export const SearchBar = ({ changeQuery }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeQuery(search);
  };

  const clearQuery = (e) => {
    setSearch("");
    changeQuery("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Button
        aria-label="search button"
        type="submit"
        style={{ height: "25px" }}
      >
        <FaSearch />
      </Button>
      <Input
        $search={search}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search by keywords"
        onChange={onChange}
        value={search}
      />
      {search && (
        <ClearBtn type="button" onClick={clearQuery}>
          <CloseIcon />
        </ClearBtn>
      )}
    </Form>
  );
};
