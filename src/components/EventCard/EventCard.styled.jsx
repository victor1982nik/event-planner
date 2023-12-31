import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  position: relative;

  width: 271px;
  height: 480px;

  border-radius: 12px;
  background-color: white;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media screen and (min-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1280px) {
    width: 302px;
  }

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.63);
    transform: scale(1.05);
  }
`;

export const Filters = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 12;

  display: flex;
  align-items: center;
  gap: 12px;

  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  text-transform: capitalize;
`;

export const Category = styled.span`
  padding: 6px 12px;
  border-radius: 8px;

  background-color: white;
  color: #7b61ff;
`;

export const Priority = styled.span`
  padding: 6px 12px;
  border-radius: 8px;

  background-color: white;
  color: #7b61ff;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 271px;
  height: 336px;
  overflow: hidden;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 332px;
  }

  @media screen and (min-width: 1280px) {
    width: 302px;
  }
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  ${Card}:hover &, ${Card}:focus & {
    height: 280px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 336px;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: "#7B61FF";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
`;

export const Title = styled.h2`
  padding: 16px 16px 8px 16px;

  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Description = styled.p`
  padding: 8px 16px 16px 16px;

  color: #49454f;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;

export const Button = styled.button`
  visibility: hidden;
  opacity: 0;

  position: absolute;
  bottom: 16px;
  right: 16px;

  padding: 10px 24px;

  color: white;
  background-color: #7b61ff;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Card}:hover &, ${Card}:focus & {
    visibility: visible;
    opacity: 1;
  }

  &:hover,
  &:focus {
    background-color: #6243ff;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
`;
