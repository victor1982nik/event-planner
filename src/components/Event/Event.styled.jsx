import styled from "@emotion/styled";

export const Wrapper = styled.main`
  margin-top: 25px;

  @media screen and (min-width: 1280px) {
    width: 628px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  color: #3f3f3f;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Img = styled.img`
  width: 272px;
  height: 168px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 688px;
    height: 272px;
  }

  @media screen and (min-width: 1280px) {
    width: 628px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 24px 16px 40px;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 16px 40px 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0 40px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: #49454f;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: #7b61ff;
`;

export const Item = styled.li`
  padding: 6px 12px;
  text-transform: capitalize;
`;
export const DateTime = styled.p`
  padding: 6px 12px;
  color: #7b61ff;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const Button = styled.button`
  width: 108px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor || "#7B61FF"};
  padding: 8px 16px;
  border-radius: 4px;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
