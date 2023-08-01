import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/create" element={null} />
          <Route path="/details" element={null} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
