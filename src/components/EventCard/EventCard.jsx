import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Card,
  Filters,
  Category,
  Priority,
  ImageContainer,
  Image,
  Info,
  Title,
  Description,
  Button,
  Link,
} from "./EventCard.styled";
import { convertDateFromIso } from "../../utils/converDateFromIso";

export const EventCard = ({ event }) => {
  const [color, setColor] = useState(null);

  const {
    id,
    title,
    description,
    category,
    priority,
    place,
    date,
    time,
    photo,
  } = event;

  useEffect(() => {
    switch (priority) {
      case "high":
        setColor("#FF2B77");
        break;
      case "medium":
        setColor("#E2A300");
        break;
      case "low":
        setColor("#6BD475");
        break;
      default:
        return;
    }
  }, [priority]);

  const dateConvert = (date) => {
    const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (iso8601RegExp.test(date)) {
      date = convertDateFromIso(date);
    }
    return date;
  };
  const dateConverted = dateConvert(date);

  const location = useLocation();
  return (
    <Card>
      <Filters>
        <Category>{category}</Category>
        <Priority style={{ color: color }}>{priority}</Priority>
      </Filters>

      <ImageContainer>
        <Image src={photo} alt={title} />
        <Info>
          <span>
            {dateConverted} at {time}
          </span>
          <span>{place}</span>
        </Info>
      </ImageContainer>

      <Title>{title}</Title>
      {/* <Description style={{ paddingBottom: showMore ? "8px" : "16px" }}> */}
      <Description>{description}</Description>

      <Link to={`/details/${id}`} state={{ from: location }}>
        <Button type="button">More Info</Button>
      </Link>
    </Card>
  );
};
