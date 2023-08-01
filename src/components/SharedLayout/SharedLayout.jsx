//import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Link,
  Header,
  Wrapper,
  Container,
  SearcBarWrapper,
} from "./SharedLayout.styled";
import { SearchBar } from "../SearchBar/SearchBar";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <Link to="/" end>
              Event Planner
            </Link>
            <div>En</div>
          </Wrapper>
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
