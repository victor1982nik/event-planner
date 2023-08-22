import styled from "styled-components";
import { ChevronSmallDown, ChevronSmallUp } from "react-swm-icon-pack";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const StyledIconDown = styled(ChevronSmallDown)`
  position: absolute;
  top: 50%;
  //transform: translateY(-50%);
  right: 12px;
`;

export const StyledIconUp = styled(ChevronSmallUp)`
  position: absolute;
  top: 50%;
  //transform: translateY(-50%);
  right: 12px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  height: 56px;

  outline: none;
  border-radius: ${(p) => p.theme.radii.small};
  border: 1px solid ${(p) => p.theme.colors.borderInput};
  color: ${(p) => p.theme.colors.inputText};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;
  caret-color: transparent;

  &:focus {
    border-color: ${(p) => p.theme.colors.borderInputAccent};
  }
  &::placeholder {
    opacity: ${(p) => (p.$date ? "1" : p.$opened ? "1" : "0.5")};
    color: ${(p) => (p.$opened ? p.theme.colors.borderInputAccent : "inherit")};
  }
`;

export const Popup = styled.div`
  margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  padding: 20px;
  overflow: hidden;

  border-radius: ${(p) => p.theme.radii.small};
  background-color: ${(p) => p.theme.colors.whiteText};
  border: none;
  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;
  z-index: 2;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: flex-end;
`;

export const BtnCancel = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.borderInputAccent};;
  border-radius: ${(p) => p.theme.radii.tiny};
  background-color: ${(p) => p.theme.colors.whiteText};
  color: ${(p) => p.theme.colors.purpleText};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.33
  font-family: inherit;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, 
  color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    border-color: ${(p) => p.theme.colors.buttonAccent};
    color: ${(p) => p.theme.colors.buttonAccent};
  }
`;

export const BtnChoose = styled.button`
  padding: 8px 16px;
  border: ${(p) => `${p.theme.borders.normal} ${p.theme.colors.button}`};
  cursor: pointer;
  border-radius: ${(p) => p.theme.radii.tiny};
  background-color: ${(p) => p.theme.colors.button};
  color: ${(p) => p.theme.colors.whiteText};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.33;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: ${(p) => p.theme.colors.buttonAccent};
  }
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  font-family: Poppins, sans-serif !important;
  width: 100%;

  button {
    font-family: Poppins, sans-serif !important;
  }

  .react-calendar__navigation {
    height: 100%;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }

  .react-calendar__month-view__weekdays {
    text-transform: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
  }

  .react-calendar__tile--now {
    background: inherit;
    color: #7b61ff;
  }

  .react-calendar__tile--now {
    color: #7b61ff !important;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: #7b61ff !important;
    background: inherit;
  }

  .react-calendar__tile--active {
    background: #7b61ff !important;
    color: #ffffff !important;
  }

  .react-calendar__tile.react-calendar__month-view__days__day {
    color: #aca7c3;
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #ff2b77;
  }

  .react-calendar__month-view__days__day--weekend {
    color: inherit;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: transparent;
    color: #3f3f3f;
  }

  :where(abbr[title]) {
    text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`;
