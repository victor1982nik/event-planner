import styled from "styled-components";
import { ChevronSmallDown, ChevronSmallUp } from "react-swm-icon-pack";
//import { Swiper, SwiperSlide } from "swiper/react";

export const StyledIconDown = styled(ChevronSmallDown)`
  position: absolute;
  top: 50%;
  //transform: translateY(-50%);
  right: 12px;
`;

export const StyledIconUp = styled(ChevronSmallUp)`
  position: absolute;
  top: 50%;
  //transform: translateY(-50%);
  right: 12px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  height: 56px;

  outline: none;
  border-radius: ${(p) => p.theme.radii.small};
  border: 1px solid ${(p) => p.theme.colors.borderInput};
  color: ${(p) => p.theme.colors.inputText};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: inherit;
  caret-color: transparent;

  &:focus {
    border-color: ${(p) => p.theme.colors.borderInputAccent};
  }
  &::placeholder {
    opacity: ${(p) => (p.$time ? "1" : p.$opened ? "1" : "0.5")};
    color: ${(p) => (p.$opened ? p.theme.colors.borderInputAccent : "inherit")};
  }
`;

export const InputWrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  position: relative;
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  transform: translateY(100%);
  z-index: 25;

  display: flex;
  align-items: center;

  width: 100%;
  height: 160px;
  padding: 0px 16px;
  gap: 8px;

  border-radius: ${(p) => p.theme.radii.small};
  background: ${(p) => p.theme.colors.whiteText};

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: ${(p) => p.theme.colors.borderInput};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: normal;

  overflow: hidden;
`;

export const VisionLine = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -26px;
    left: 0;

    width: 337px;
    height: 48px;
    border-top: 1px solid ${(p) => p.theme.colors.borderInput};

    border-bottom: 1px solid ${(p) => p.theme.colors.borderInput};
  }

  &::before {
    content: ":";
    position: absolute;
    top: -13px;
    left: 62px;

    color: ${(p) => p.theme.colors.bar};

    @media screen and (min-width: 768px) {
      left: 85px;
    }
  }
`;
// export const SwiperStyled = styled(Swiper)`
//   width: 73px;
//   height: 48px;
// `;

// export const SwiperSlideStyled = styled(SwiperSlide)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex-shrink: 0;

//   width: 73px;
//   padding: 12px 16px;
//   gap: 4px;

//   cursor: pointer;

//   @media screen and (max-width: 768px) {
//     width: 40px;
//   }
// `;

export const Selected = styled.div`
  color: ${(p) => p.$isActive && "#3f3f3f"};
`;
