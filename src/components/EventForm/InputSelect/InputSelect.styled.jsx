import styled from "styled-components";
import { ChevronSmallDown, ChevronSmallUp } from "react-swm-icon-pack";

export const Select = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StyledIconDown = styled(ChevronSmallDown)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const StyledIconUp = styled(ChevronSmallUp)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  height: 56px;
  outline: none;
  border-radius: ${(p) => p.theme.radii.small};
  border: ${(p) => `${p.theme.borders.normal} ${p.theme.colors.borderInput}`};
  border-color: ${(p) => p.$error && p.theme.colors.form.borderInputFail};
  color: ${(p) => p.theme.colors.input};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;

  &:focus {
    border-color: ${(p) => p.theme.colors.accentText};
  }
`;

export const Text = styled.p`
  //opacity: ${(p) => (!p.$select ? "1" : "0.5")};

  color: ${(p) => p.$isOpen && p.theme.colors.accentText};
`;

export const SelectBody = styled.ul`
  //margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  padding: 0 16px;
  overflow: hidden;
  border-radius: ${(p) => p.theme.radii.small};
  background-color: ${(p) => p.theme.colors.whiteText};
  border: none;
  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;
  z-index: 2;
`;

export const SelectItem = styled.li`
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: ${(p) =>
      `${p.theme.borders.normal} ${p.theme.colors.borderInput}`};
  }

  &:hover {
    cursor: pointer;
  }
`;
