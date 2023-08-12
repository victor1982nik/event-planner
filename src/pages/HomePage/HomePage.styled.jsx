import styled from "styled-components";

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
    padding: 60px 0px;
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.mainTitle}
  font-size: 24px;
  font-weight: 600;

  @media ${(p) => p.theme.breakpoints.mobile.media}  {
    line-height: normal;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const Wrapper = styled.div`
  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
