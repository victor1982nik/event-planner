import { useState } from "react";
import { capitalizeFirstLetter } from "../../../utils";

import {
  Input,
  StyledIconUp,
  StyledIconDown,
  InputWrapper,
} from "./InputTime.styled";
import { TimePicker } from "./TimePicker";

function InputTime({ field, form }) {
  const [time, setTime] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChange = (time) => {
    setTime(time);
    form.setFieldValue(field.name, time);
  };

  return (
    <>
      <Input
        $time={time}
        $opened={isOpen}
        placeholder={
          time
            ? time
            : !isOpen
            ? "Input"
            : `Select ${capitalizeFirstLetter(field.name)}`
        }
        onClick={togglePopup}
      />
      {!isOpen ? (
        <StyledIconDown onClick={togglePopup} color="#7B61FF" />
      ) : (
        <StyledIconUp onClick={togglePopup} color="#7B61FF" />
      )}

      {isOpen && (
        <InputWrapper>
          <TimePicker onSelectTime={onChange} />
        </InputWrapper>
      )}
    </>
  );
}

export default InputTime;
