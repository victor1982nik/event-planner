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

  const setColor = (priority) => {
    switch (priority) {
      case "High":
        return "#FF2B77";
      case "Medium":
        return "#E2A300";
      case "Low":
        return "#6BD475";
      default:
        return;
    }
  };

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
        <Priority style={{ color: setColor(priority) }}>{priority}</Priority>
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
