import { useLocation } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import EventForm from "../../components/EventForm/EventForm3";
import { Main } from "../HomePage/HomePage.styled";

const CreateEvent = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <Main>
        <BackLink to={backLinkHref}>Back</BackLink>
        <h1>Create new event</h1>
        <EventForm />
      </Main>
    </>
  );
};

export default CreateEvent;
