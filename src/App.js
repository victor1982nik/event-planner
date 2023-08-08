import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateEvent from "./pages/CreateEventPage/CreateEventPage";

import EventPage from "./pages/EventPage/EventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/details/:id" element={<EventPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
