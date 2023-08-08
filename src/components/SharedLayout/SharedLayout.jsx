//import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Link,
  Header,
  Container,
  SearcBarWrapper,
  Lang,
} from "./SharedLayout.styled";
import { SearchBar } from "../SearchBar/SearchBar";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Link to="/" end>
            Event Planner
          </Link>
          <Lang>UK</Lang>

          <SearcBarWrapper>
            <SearchBar />
          </SearcBarWrapper>
        </Container>
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense> */}
      <Outlet />
    </>
  );
};
