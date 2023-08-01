import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding-top: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #7b61ff;
  position: relative;

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    padding-top: 26px;
    padding-bottom: 18px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  @media ${(p) => p.theme.breakpoints.mobile.media} {
    width: ${(p) => p.theme.breakpoints.mobile.width};
  }
  @media ${(p) => p.theme.breakpoints.tablet.media} {
    padding-left: 40px;
    padding-right: 40px;
    width: ${(p) => p.theme.breakpoints.tablet.width};
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
    padding-left: 80px;
    padding-right: 80px;
    width: ${(p) => p.theme.breakpoints.desktop.width};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 31px;
  padding: 6px 2px;
  justify-content: space-between;

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    margin-bottom: 0;
  }
`;

export const SearcBarWrapper = styled.div`
  @media ${(p) => p.theme.breakpoints.tablet.media} {
    position: absolute;
    top: 24px;
    left: 267px;
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
  }
`;

export const Link = styled(NavLink)`
  color: #7b61ff;
  //margin-right: auto;
  text-decoration: none;
  font-weight: 500;

  //   &.active {
  //     color: red;
  //   }
`;
