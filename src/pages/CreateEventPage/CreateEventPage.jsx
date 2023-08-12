import { useLocation } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import EventForm from "../../components/EventForm/EventForm";
import { Main } from "../EventPage/EventPage.styled";
import { Title } from "./CreateEventPage.styled";

const CreateEvent = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <Main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <Title>Create new event</Title>
        <EventForm />
      </Main>
    </>
  );
};

export default CreateEvent;
