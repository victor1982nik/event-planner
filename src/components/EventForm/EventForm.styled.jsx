import styled from "styled-components";
import { Field } from "formik";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 272px;
  margin: 24px auto;
  padding: 40px 16px;

  border-radius: ${(p) => p.theme.radii.small} 
  background: ${(p) => p.theme.colors.whiteText};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    width: 688px;
    padding: 40px 24px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    width: 1280px;
    padding: 40px 40px 54px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    flex-wrap: wrap;
    column-gap: 25px;
    max-height: 520px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    max-height: 320px;
    column-gap: 42px;
  }
`;

export const Label = styled.label`
  display: inline-block;

  color: ${(p) => p.theme.colors.purpleText};
  font-size: ${(p) => p.theme.fontSizes.m} 
  line-height: 1;
  letter-spacing: 0.04em;
  margin-bottom: 8px;  
`;

export const Input = styled(Field)`
  display: block;
  width: 100%;
  padding: 12px 16px;
  height: 56px;

  outline: none;
  border-radius: ${(p) => p.theme.radii.small} 
  border: 1px solid ${(p) => p.theme.colors.borderInput};
  color: rgb(63, 63, 63);

  font-size: ${(p) => p.theme.fontSizes.m} 
  font-family: inherit;
  line-height: 1.5;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${(p) => p.theme.colors.accentText};
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
  color: ${(p) => p.theme.colors.borderInputFail};
  font-size: ${(p) => p.theme.fontSizes.xs} 
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

  border: ${(p) => p.theme.borders.none};
  border-radius: ${(p) => p.theme.radii.small};
  background-color: ${(p) => p.theme.colors.button};
  color: ${(p) => p.theme.colors.whiteText};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.5;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    align-self: flex-end;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    margin-top: 60px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.buttonAccent};
  }
`;

export const StyledWrap = styled.div``;
