import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Info,
  Title,
  Wrapper,
  Img,
  Description,
  List,
  Item,
  DateTime,
  InfoWrapper,
  ButtonWrapper,
  Button,
} from "./Event.styled";
import { API } from "../../api";
import { convertDateFromIso } from "../../utils/converDateFromIso";

export const Event = ({ event }) => {
  const navigate = useNavigate();
  //if (!event) return;
  //console.log(event);
  const {
    id,
    name,
    description,
    category,
    priority,
    place,
    date,
    time,
    photo,
  } = event;
  //console.log(name, description, category, priority, place, date, time, photo);

  const formatTime = (date, time) => {
    const [hours] = time.split(":").map(Number);
    const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (iso8601RegExp.test(date)) {
      date = convertDateFromIso(date);
    }
    const formattedDateTime = `${date} at ${time} `;
    return hours > 12 ? formattedDateTime + "pm" : formattedDateTime + "am";
  };

  const setColor = (priority) => {
    switch (priority) {
      case "high":
        return "#FF2B77";
      case "medium":
        return "#E2A300";
      case "low":
        return "#6BD475";
      default:
        return;
    }
  };

  const handleDelete = async () => {
    await API.deleteEvent(id);
    toast.success("The event has been deleted!");
    navigate("/");
  };
  return (
    <>
      <Wrapper>
        <Title>{name}</Title>
        <Img src={photo} alt={name} />
        <InfoWrapper>
          <Description>{description}</Description>
          <Info>
            <List>
              <Item>{category}</Item>
              <Item>
                <span style={{ color: setColor(priority) }}>{priority}</span>
              </Item>
              <Item>{place}</Item>
            </List>
            <DateTime>{formatTime(date, time)}</DateTime>
          </Info>
          <ButtonWrapper>
            <Button
              type="button"
              color="#7B61FF"
              $backgroundColor="white"
              $borderColor="#7B61FF"
            >
              Edit
            </Button>
            <Button
              type="button"
              color="white"
              $backgroundColor="#7B61FF"
              onClick={handleDelete}
            >
              Delete event
            </Button>
          </ButtonWrapper>
        </InfoWrapper>
      </Wrapper>
    </>
  );
};
