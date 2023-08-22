import { useState } from "react";
import { Mousewheel } from "swiper/modules";
import {
  Selected,
  SwiperSlideStyled,
  SwiperStyled,
  TimePickerContainer,
  VisionLine,
} from "./InputTime.styled";

export const TimePicker = ({ onSelectTime }) => {
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);
  const periods = ["AM", "PM"];

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const timeFormat = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const time = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;

  return (
    <TimePickerContainer onClick={() => onSelectTime(time)}>
      <VisionLine></VisionLine>
      {/* hour */}
      <SwiperStyled
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        initialSlide={3}
        onSlideChange={(swiper) => {
          handleHourChange(timeFormat(hours[swiper.activeIndex]));
        }}
      >
        {hours.map((hour) => (
          <SwiperSlideStyled key={hour}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{timeFormat(hour)}</Selected>
            )}
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
      {/* minute */}
      <SwiperStyled
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        initialSlide={3}
        onSlideChange={(swiper) => {
          handleMinuteChange(timeFormat(minutes[swiper.activeIndex]));
        }}
      >
        {minutes.map((minute) => (
          <SwiperSlideStyled key={minute}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{timeFormat(minute)}</Selected>
            )}
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
      {/* period */}
      <SwiperStyled
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        initialSlide={3}
        onSlideChange={(swiper) => {
          handlePeriodChange(periods[swiper.activeIndex]);
        }}
      >
        {periods.map((period) => (
          <SwiperSlideStyled key={period}>
            {({ isActive }) => (
              <Selected $isActive={isActive}>{period}</Selected>
            )}
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </TimePickerContainer>
  );
};
