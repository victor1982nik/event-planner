import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  border-bottom: 1px solid #7b61ff;
  background-color: #fefcff;
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 24px;
  width: ${(p) => p.theme.breakpoints.mobile.width};

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    padding: 26px 40px 18px 40px;
    width: ${(p) => p.theme.breakpoints.tablet.width};
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
    padding: 22px 0;
    width: ${(p) => p.theme.breakpoints.desktop.width};
  }
`;

export const SearcBarWrapper = styled.div`
  width: 272px;
  height: 48px;
  padding: 12px;
  margin-top: 24px;

  display: flex;
  align-items: center;

  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media ${(p) => p.theme.breakpoints.tablet.media} {
    position: absolute;
    top: 24px;
    right: 133px;

    margin: 0;
    width: 368px;
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
    position: absolute;
    top: 24px;
    right: 173px;

    margin: 0;
    width: 410px;
  }
`;
export const Link = styled(NavLink)`
  color: #7b61ff;

  text-decoration: none;
  font-weight: 400;
  font-size: 24px;
  line-height: normal;
  height: 36px;
`;

export const Lang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
`;
