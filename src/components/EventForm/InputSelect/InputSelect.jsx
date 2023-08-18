import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../../utils";
import {
  Select,
  Input,
  SelectBody,
  SelectItem,
  Text,
  StyledIconDown,
  StyledIconUp,
} from "./InputSelect.styled";

function InputSelect({ field, form, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const { name, value } = field;

  //console.log(name);

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSelect = (obj) => {
    togglePopup();
    form.setFieldValue(field.name, obj.valueName);
  };

  //refactor - make semantic layout
  return (
    <Select>
      <Input onClick={togglePopup}>
        <Text $isOpen={isOpen}>
          {!isOpen && <>{value ? value : "Select"}</>}
          {isOpen && `Select ${capitalizeFirstLetter(name)}`}
        </Text>
      </Input>
      {!isOpen ? (
        <StyledIconDown onClick={togglePopup} color="#7B61FF" />
      ) : (
        <StyledIconUp onClick={togglePopup} color="#7B61FF" />
      )}

      {isOpen && (
        <SelectBody>
          {options.map((item, index) => {
            return (
              <SelectItem
                onClick={() => {
                  onSelect(item);
                }}
                key={index}
              >
                {item.valueName}
              </SelectItem>
            );
          })}
        </SelectBody>
      )}
    </Select>
  );
}

export default InputSelect;
