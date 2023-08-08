import styled from "@emotion/styled";
import { Field } from "formik";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 272px;
  margin: 24px auto;
  padding: 40px 16px;

  border-radius: 8px;
  background: white;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media screen and (min-width: 768px) {
    width: 688px;
    padding: 40px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 40px 40px 54px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    column-gap: 25px;
    max-height: 520px;
  }

  @media screen and (min-width: 1280px) {
    max-height: 320px;
    column-gap: 42px;
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
`;

export const Btn = styled.button`
  min-width: 193px;
  padding: 16px 12px;
  margin-top: 40px;

  border: none;
  border-radius: ${(p) => p.theme.radii.small};
  background-color: #7b61ff;
  color: white;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.5;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }

  &:hover {
    background-color: #6243ff;
  }
`;

export const StyledWrap = styled.div``;
