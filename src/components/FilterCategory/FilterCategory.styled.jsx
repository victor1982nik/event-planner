import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

export const FilterContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 148px;
  }
`;
export const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 148px;
  }
  ${(props) =>
    props.showCategory &&
    props.isMobile &&
    `  
    position: absolute;
    z-index: 20;    
    min-width: 148px;    
    `};
`;

export const Button = styled.button`
  cursor: pointer;

  padding: 16px;

  border: none;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: purple;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: black;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  ${(props) =>
    props.showCategory &&
    `  
    border-radius: 8px 8px 0 0;
    width: 100%;   
    `};
`;

export const BtnText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }

  ${(props) =>
    props.showCategory &&
    `  
    display: inline;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;  
    `};
`;

export const List = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  z-index: 25;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  & .option:nth-child(2n) .arrowIcon {
    transform: rotate(180deg);
  }
`;

export const Option = styled.button`
  cursor: pointer;

  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: light-gray;

  border-bottom: 1px solid light-gray;

  &:first-of-type {
    border-top: 1px solid light-gray;
  }

  &:last-of-type {
    border-bottom: none;
  }

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: purple;
    border-bottom-color: purple;
  }
`;
