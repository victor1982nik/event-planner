import { AppBar } from "../../components/AppBar/AppBar";
import { Main, Title, Wrapper, CardList } from "./HomePage.styled";
import { EventCard } from "../../components/EventCard/EventCard";
import { useState, useEffect } from "react";
import { API } from "../../api";
import { sortingOptNew } from "../../assets/options";

const Home = ({ query }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const res = await API.fetchEvents();
        setEvents(res);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getEvents();
  }, []);

  const handleFilterChange = (data) => {
    setFilter(data);
  };

  const handleSortingChange = (option) => {
    setSorting(option);
  };

  const filterByKeyword = (search) => {
    if (search) {
      return events.filter(
        (event) =>
          event.title.includes(search) || event.description.includes(search)
      );
    }
    return events;
  };

  const filteredEventsByKeyword = filterByKeyword(query);

  const filterEvents = (filter) => {
    if (filter)
      return filteredEventsByKeyword.filter(
        (event) => event.category === filter
      );
    return filteredEventsByKeyword;
  };

  const filteredEv = filterEvents(filter);

  function getPriorityValue(priority) {
    switch (priority) {
      case "High":
        return 3;
      case "Medium":
        return 2;
      case "Low":
        return 1;
      default:
        return 0;
    }
  }

  const sortEvents = (sorting) => {
    if (!sorting) {
      return filteredEv;
    }
    switch (sorting) {
      //by name
      case sortingOptNew[0].value:
        return [...filteredEv].sort((a, b) => a.title.localeCompare(b.title));
      case sortingOptNew[1].value:
        return [...filteredEv].sort((a, b) => b.title.localeCompare(a.title));
      //by data
      case sortingOptNew[2].value:
        return [...filteredEv].sort((a, b) => {
          const firstDate = new Date(a.date);
          const secondDate = new Date(b.date);
          return firstDate - secondDate;
        });
      case sortingOptNew[3].value:
        return [...filteredEv].sort((a, b) => {
          const firstDate = new Date(a.date);
          const secondDate = new Date(b.date);
          return secondDate - firstDate;
        });
      //by priority
      case sortingOptNew[4].value:
        return [...filteredEv].sort((a, b) => {
          const first = getPriorityValue(a.priority);
          const second = getPriorityValue(b.priority);
          return first - second;
        });

      case sortingOptNew[5].value:
        return [...filteredEv].sort((a, b) => {
          const first = getPriorityValue(a.priority);
          const second = getPriorityValue(b.priority);
          return second - first;
        });

      default:
        return filteredEv;
    }
  };
  const sortedEvents = sortEvents(sorting);
  //console.log(sorting);

  return (
    <Main>
      <Wrapper>
        <AppBar
          onFilterChange={handleFilterChange}
          onSortingChange={handleSortingChange}
        />
        <Title>My events</Title>
      </Wrapper>
      {isLoading && <div>Loading...</div>}
      <CardList>
        {sortedEvents.length > 0 &&
          sortedEvents.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
      </CardList>
    </Main>
  );
};

export default Home;
