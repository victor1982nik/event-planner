import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

import {
  Wrap,
  WrapInput,
  Input,
  StyledIconUp,
  StyledIconDown,
  Popup,
  Text,
  BtnWrap,
  BtnCancel,
  BtnChoose,
} from "./InputDate.styled";

function InputDate({ field, form, options, label, meta, ...props }) {
  const [value, setValue] = useState(null);
  const [changeValue, setChangeValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChange = (value) => {
    setChangeValue(value);
  };

  const onChoose = (value) => {
    setValue(value);
    console.log(form.values[field.name]);
    console.log(value);
    togglePopup();

    form.setFieldValue(field.name, value);
  };

  return (
    <Wrap>
      <WrapInput>
        <Input onClick={togglePopup}>
          <Text $select={value}>
            {!isOpen && <>{value ? format(value, "dd.MM") : "Select"}</>}
            {isOpen && `Select ${label}`}
          </Text>
        </Input>
        {!isOpen ? (
          <StyledIconDown onClick={togglePopup} color="#7B61FF" />
        ) : (
          <StyledIconUp onClick={togglePopup} color="#7B61FF" />
        )}
      </WrapInput>

      {isOpen && (
        <Popup>
          <Calendar
            calendarType="gregory"
            locale="en-EN"
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            onChange={onChange}
            value={changeValue}
          />
          <BtnWrap>
            <BtnCancel onClick={togglePopup} type="button">
              Cancel
            </BtnCancel>
            <BtnChoose
              onClick={() => {
                onChoose(changeValue);
              }}
              type="button"
            >
              Choose date
            </BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </Wrap>
  );
}

export default InputDate;
