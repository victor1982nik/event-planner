import styled from "styled-components";

export const LinkText = styled.span`
  margin-left: 8px;
`;

export const Main = styled.main`
  padding: 40px 24px;
  margin: 0 auto;
  width: 320px;

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    width: ${(p) => p.theme.breakpoints.tablet.width};
    padding: 40px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    width: ${(p) => p.theme.breakpoints.desktop.width};
    padding: 20px 0px;
  }
`;
