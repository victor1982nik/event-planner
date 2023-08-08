import styled from "@emotion/styled";
import { Field } from "formik";

export const StyledForm = styled.div`
  position: relative;
  padding: 40px 16px;
  text-align: left;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(166, 141, 174, 0.28) 2px 4px 9px 0px;

  @media screen and (min-width: 768px) {
    padding: 40px 24px 136px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 40px 170px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Label = styled.label`
  color: rgb(123, 97, 255);
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
  display: inline-block;
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 12px 16px;
  height: 56px;
  outline: none;
  border-radius: 8px;
  border: 1px solid rgb(172, 167, 195);
  color: rgb(63, 63, 63);
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: rgb(123, 97, 255);
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.inputPlaceholder};
    font-family: inherit;
    line-height: 1.5;
    font-size: ${(p) => p.theme.fontSizes.sx};
  }
`;

export const Textarea = styled(Input)`
  resize: none;
  min-height: 156px;
`;

export const ErrorText = styled.p`
  position: absolute;
  color: rgb(255, 43, 119);
  font-size: 12px;
  right: 19px;
  margin-top: 4px;
`;
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const Btn = styled.button`
  min-width: 193px;
  padding: 16px 12px;
  border: none;
  border-radius: ${(p) => p.theme.radii.small};
  background-color: rgb(123, 97, 255);
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.5;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: rgb(98, 67, 255);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 24px;
    bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    right: 40px;
    bottom: 54px;
  }
`;

export const StyledWrap = styled.div``;
