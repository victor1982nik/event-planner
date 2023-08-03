import { AppBar } from "../../components/AppBar/AppBar";
import { Main, Title, Wrapper, CardList } from "./HomePage.styled";
import { useMedia } from "react-use";
import { theme } from "../../theme";
import { events } from "../../data/data";
import { EventCard } from "../../components/EventCard/EventCard";

const Home = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);

  return (
    <Main>
      <Wrapper>
        <AppBar isMobile={isMobile} />
        <Title>My events</Title>
      </Wrapper>
      <CardList>
        {events.map((event) => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </CardList>
    </Main>
  );
};

export default Home;
