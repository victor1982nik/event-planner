import React, { useState } from "react";

import {
  Select,
  Input,
  SelectBody,
  SelectItem,
  SelectHeader,
  Text,
  StyledIconDown,
  StyledIconUp,
} from "./InputSelect.styled";

function InputSelect({ field, form, options, label, meta, ...props }) {
  const [selectValue, setSelectValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onSelect = (obj) => {
    setSelectValue(obj.valueName);
    togglePopup();
    form.setFieldValue(field.name, obj.valueName);
  };

  return (
    <Select>
      <SelectHeader>
        <Input onClick={togglePopup}>
          <Text $select={selectValue}>
            {!isOpen && <>{selectValue ? selectValue : "Select"}</>}
            {isOpen && `Select ${label}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={togglePopup} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={togglePopup} color="#7B61FF" />
        )}
      </SelectHeader>

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
