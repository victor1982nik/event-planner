import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: ${(p) => p.theme.colors.purpleText};
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: normal;
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BiArrowBack />
      {children}
    </StyledLink>
  );
};
