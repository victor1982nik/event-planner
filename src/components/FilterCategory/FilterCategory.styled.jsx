import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 24px;
// `;

// export const FilterContainer = styled.div`
//   position: relative;

//   @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
//     min-width: 148px;
//   }
// `;
export const Wrapper = styled.div`
  position: relative;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    min-width: 148px;
  }
  ${(props) =>
    props.$showCategory &&
    props.$isMobile &&
    `  
    position: absolute;
    z-index: 20;    
    min-width: 148px;    
    `};
`;

export const Button = styled.button`
  padding: 16px;

  border: ${(p) => p.theme.borders.none};

  border-radius: ${(p) => p.theme.radii.small};
  background-color: ${(p) => p.theme.colors.whiteText};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: ${(p) =>
    p.$showCategory
      ? p.theme.colors.button
      : p.$category !== "Category"
      ? p.theme.colors.button
      : p.theme.colors.bar};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${(p) => p.theme.colors.button};
  }

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    width: 100%;
  }

  ${(p) =>
    p.$showCategory &&
    `  
    border-radius: 8px 8px 0 0;
    width: 100%;      
    `};
`;

export const BtnText = styled.span`
  display: none;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: normal;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    display: inline;
  }

  display: ${(p) => p.$showCategory && "inline"};
  // color: ${(p) => p.$category !== "Category" && p.theme.colors.button};
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
  border-bottom-left-radius: ${(p) => p.theme.radii.small};
  border-bottom-right-radius: ${(p) => p.theme.radii.small};
  background-color: ${(p) => p.theme.colors.whiteText};

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

  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 1;
  color: ${(p) => p.theme.colors.menu};

  border-bottom: ${(p) => p.theme.borders.normal};
  ${(p) => p.theme.colors.menu};

  &:first-of-type {
    border-top: ${(p) => p.theme.borders.normal};
    ${(p) => p.theme.colors.menu};
  }

  &:last-of-type {
    border-bottom: none;
  }

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.buttonAccent};
    border-bottom-color: ${(p) => p.theme.colors.buttonAccent};
  }
`;
