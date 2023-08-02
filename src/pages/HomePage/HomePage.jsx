import { AppBar } from "../../components/AppBar/AppBar";
import { Main } from "./HomePage.styled";
import { useMedia } from "react-use";
import { theme } from "../../theme";

const Home = () => {
  const isMobile = useMedia(theme.breakpoints.mobile.media);
  //console.log(isMobile);
  return (
    <Main>
      <AppBar isMobile={isMobile} />
    </Main>
  );
};

export default Home;
