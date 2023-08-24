import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding-left: 4px;
  padding-right: 14px;

  font: inherit;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  border: none;
  outline: none;
  line-height: 1;

  &::placeholder {
    font: inherit;
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  color: ${(p) =>
    p.$search ? p.theme.colors.button : p.theme.colors.inputPlaceholderSearch};
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: ${(p) => p.theme.colors.button};

  &:hover {
    opacity: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${(p) => p.theme.colors.whiteText};
  border-radius: ${(p) => p.theme.radii.tiny};
  overflow: hidden;
`;

export const ClearBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 16px;
  padding: 0;

  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const CloseIcon = styled(IoMdClose)`
  color: ${(p) => p.theme.colors.button};
`;
