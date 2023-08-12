import styled from "styled-components";

export const AddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 16px;
  background: ${(p) => p.theme.colors.button};
  border-radius: ${(p) => p.theme.radii.small};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: ${(p) => p.theme.colors.whiteText};

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    padding: 16px 12px;
  }
`;

export const TextAddBtn = styled.span`
  display: none;
  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    display: inline;
    font-size: ${(p) => p.theme.fontSizes.m};
    font-weight: ${(p) => p.theme.fontWeights.medium};
    line-height: normal;
  }
`;
export const FilterBtn = styled.button``;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;

  margin-bottom: 40px;

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    margin-bottom: 24px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    margin-bottom: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;
