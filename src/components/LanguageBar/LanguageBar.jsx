//import { useState } from "react";
import { Select } from "./Language.styled";

export const LanguageBar = () => {
  //const [isOpen, setIsOpen] = useState(false);
  //const [lang, setLang] = useState("EN");

  //const handleClick = () => {
  //  setIsOpen((prevState) => !prevState);
  //};

  return (
    <>
      <label htmlFor="lang" />
      <Select name="lang" id="lang">
        <option value="UK">EN</option>
        <option value="UA">UA</option>
      </Select>
    </>
  );
};
