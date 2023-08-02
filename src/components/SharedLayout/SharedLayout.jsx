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
          <Lang>EN</Lang>

          <SearcBarWrapper>
            <SearchBar />
          </SearcBarWrapper>
        </Container>
      </Header>
      <Container>
        {/* <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense> */}
        <Outlet />
      </Container>
    </>
  );
};
