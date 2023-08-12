import styled from "styled-components";
import { ChevronSmallDown, ChevronSmallUp } from "react-swm-icon-pack";

export const Select = styled.div`
  position: relative;
  cursor: pointer;
`;

export const SelectHeader = styled.div`
  position: relative;
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
  color: ${(p) => p.theme.colors.inputTitle};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;

  &:focus {
    border-color: ${(p) => p.theme.colors.accentText};
  }
`;

export const Text = styled.p`
  opacity: ${(p) => !p.$select && "0.5"};
`;

export const SelectBody = styled.div`
  margin-top: 18px;
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

export const SelectItem = styled.div`
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: ${(p) =>
      `${p.theme.borders.normal} ${p.theme.colors.borderInput}`};
  }

  &:hover {
    cursor: pointer;
  }
`;
