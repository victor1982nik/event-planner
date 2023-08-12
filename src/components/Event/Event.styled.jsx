import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 25px;

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    padding-top: 10px;
    width: 628px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  color: ${(p) => p.theme.colors.mainTitle};
  font-size: ${(p) => p.theme.fontSizes.l};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: normal;
`;

export const Img = styled.img`
  width: 272px;
  height: 168px;
  border-radius: ${(p) => p.theme.radii.small};
  object-fit: cover;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    width: 688px;
    height: 272px;
  }

  @media ${(p) => p.theme.breakpoints.desktop.media} {
    width: 628px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 24px 16px 40px;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
    padding: 20px 16px 40px 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0 40px;
`;

export const Description = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 1.42;
  color: ${(p) => p.theme.colors.text};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: ${(p) => p.theme.colors.purpleText};
`;

export const Item = styled.li`
  padding: 6px 12px;
  text-transform: capitalize;
`;
export const DateTime = styled.p`
  padding: 6px 12px;
  color: ${(p) => p.theme.colors.purpleText};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    justify-content: flex-end;
    gap: 16px;
  }
  @media ${(p) => p.theme.breakpoints.desktop.media} {
    padding-right: 24px;
  }
`;

export const Button = styled.button`
  width: 108px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.$borderColor || "#7B61FF"};
  padding: 8px 16px;
  border-radius: ${(p) => p.theme.radii.tiny};
  flex-shrink: 0;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 1.33;

  @media ${(p) => p.theme.breakpoints.tablet.mediaFrom} {
    width: auto;
  }
`;
