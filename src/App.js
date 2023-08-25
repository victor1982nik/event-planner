import { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
//import Home from "./pages/HomePage/HomePage";
//import CreateEvent from "./pages/CreateEventPage/CreateEventPage";
//import EventPage from "./pages/EventPage/EventPage";
//import { Test } from "./components/Test/Test";
//const Test = lazy(() => import("./components/Test/Test"));
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const EventPage = lazy(() => import("./pages/EventPage/EventPage"));
const CreateEvent = lazy(() =>
  import("./pages/CreateEventPage/CreateEventPage")
);

function App() {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (data) => {
    setQuery(data);
  };
  //console.log(query);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout changeQuery={handleChangeQuery} />}
        >
          <Route index element={<Home query={query} />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path="details/:id" element={<EventPage />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
