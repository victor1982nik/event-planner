import styled from "@emotion/styled";

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
  font-size: 32px;
  color: #3f3f3f;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 767px) {
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

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
