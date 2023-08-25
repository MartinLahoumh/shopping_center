import { useParams } from "react-router";
import TrendingSlider from "../components/TrendingSlider";
import DisplaySection from "../components/DisplaySection";
import Header from "../components/Header";
function Home() {
  let {auth} = useParams();
    return (
      <>
        <div>
          <Header auth={auth} />
          <TrendingSlider />
          <DisplaySection category="Classic" />
          <DisplaySection category="Pop" />
          <DisplaySection category="Music" />
        </div>
      </>
    );
}

export default Home;
