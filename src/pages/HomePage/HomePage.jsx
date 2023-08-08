import { AppBar } from "../../components/AppBar/AppBar";
import { Main, Title, Wrapper, CardList } from "./HomePage.styled";
import { useMedia } from "react-use";
import { theme } from "../../theme";
import { EventCard } from "../../components/EventCard/EventCard";
import { useState, useEffect } from "react";
import { API } from "../../api";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMedia(theme.breakpoints.mobile.media);

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const res = await API.fetchEvents();
        setEvents(res);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getEvents();
  }, []);

  return (
    <Main>
      <Wrapper>
        <AppBar isMobile={isMobile} />
        <Title>My events</Title>
      </Wrapper>
      {isLoading && <div>Loading...</div>}
      <CardList>
        {events &&
          events.length > 0 &&
          events.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
      </CardList>
    </Main>
  );
};

export default Home;
