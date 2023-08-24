import styled from "styled-components";

export const BtnText = styled.span`
  display: ${(props) => (props.$showSortingOptions ? "inline" : "none")};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    display: inline;
  }
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
    props.$showSortingOptions &&
    `  
    border-radius: 8px 8px 0 0;
    width: 100%;   
    `};
`;

export const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 148px;
  }
  ${(props) =>
    props.$showSortingOptions &&
    props.$isMobile &&
    `  
    position: absolute;
    z-index: 20;    
    min-width: 148px;    
    `};
`;
