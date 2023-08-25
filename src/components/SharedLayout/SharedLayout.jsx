//import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Link,
  Header,
  Container,
  SearcBarWrapper,
  //Lang,
} from "./SharedLayout.styled";
import { SearchBar } from "../SearchBar/SearchBar";
import { LanguageBar } from "../LanguageBar/LanguageBar";

export const SharedLayout = ({ changeQuery }) => {
  return (
    <>
      <Header>
        <Container>
          <Link to="/" end>
            Event Planner
          </Link>
          <LanguageBar />

          <SearcBarWrapper>
            <SearchBar changeQuery={changeQuery} />
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
