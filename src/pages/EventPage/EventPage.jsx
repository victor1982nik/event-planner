import { useLocation, useParams } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { Main } from "../HomePage/HomePage.styled";
//import { events } from "../../assets/data/data";
import { Event } from "../../components/Event/Event";
import { LinkText } from "./EventPage.styled";
import { API } from "../../api";
import { useState, useEffect } from "react";

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const getEvent = async (id) => {
      try {
        setIsLoading(true);
        const res = await API.fetchEventById(id);
        setEvent(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getEvent(id);
  }, [id]);

  //console.log("event", event);
  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <Main>
        <BackLink to={backLinkHref}>
          <LinkText>Back</LinkText>
        </BackLink>
        {isLoading && <div>Is Loading ...</div>}
        {event && <Event location={location} event={event} />}
      </Main>
    </>
  );
};

export default EventPage;
