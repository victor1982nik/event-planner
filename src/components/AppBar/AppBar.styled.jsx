import styled from "@emotion/styled";

export const AddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 16px;
  background: #7b61ff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: white;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    padding: 16px 12px;
  }
`;

export const TextAddBtn = styled.span`
  display: none;
  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    display: inline;
    font-size: 16px;
    font-weight: 500;
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
