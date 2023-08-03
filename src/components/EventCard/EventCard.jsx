import { useState, useEffect } from "react";

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

export const EventCard = ({ event }) => {
  const [color, setColor] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const { name, description, category, priority, place, date, time, photo } =
    event;

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
  console.log(showMore);
  return (
    <Card onClick={() => setShowMore(true)}>
      <Filters>
        <Category>{category}</Category>
        <Priority style={{ color: color }}>{priority}</Priority>
      </Filters>

      <ImageContainer style={{ height: showMore ? "280px" : "336px" }}>
        <Image src={photo} alt={name} />
      </ImageContainer>

      <Info>
        <span>
          {date} at {time}
        </span>
        <span>{place}</span>
      </Info>

      <Title>{name}</Title>
      {/* <Description style={{ paddingBottom: showMore ? "8px" : "16px" }}> */}
      <Description>{description}</Description>
      {showMore && (
        <Link to={null}>
          <Button type="button">More Info</Button>
        </Link>
      )}
    </Card>
  );
};
