import { useState } from "react";
//import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
//import "./calendar.css";
import { format } from "date-fns";
import { capitalizeFirstLetter } from "../../../utils";

import {
  Input,
  StyledIconUp,
  StyledIconDown,
  Popup,
  BtnWrap,
  BtnCancel,
  BtnChoose,
  StyledCalendar,
} from "./InputDate.styled";

function InputDate({ field, form }) {
  const [date, setDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChange = (data) => {
    setDate(data);
  };

  const onChoose = () => {
    //setValue(value);
    //console.log(form.values[field.name]);
    //console.log(date);
    togglePopup();

    form.setFieldValue(field.name, date);
  };

  const handleCancelClick = () => {
    togglePopup();
    setDate(null);
  };

  return (
    <>
      <Input
        $date={date}
        $opened={isOpen}
        placeholder={
          !isOpen
            ? date
              ? format(date, "dd.MM")
              : "Input"
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
        <Popup>
          <StyledCalendar
            calendarType="gregory"
            locale="en-EN"
            showNeighboringMonth={false}
            next2Label={null}
            prev2Label={null}
            onChange={onChange}
            value={date}
          />
          <BtnWrap>
            <BtnCancel onClick={handleCancelClick} type="button">
              Cancel
            </BtnCancel>
            <BtnChoose onClick={onChoose} type="button">
              Choose date
            </BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </>
  );
}

export default InputDate;
