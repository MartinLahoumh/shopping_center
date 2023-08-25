import { useParams } from "react-router";
import Header from "../components/Header";
import TrendingSlider from "../components/TrendingSlider";
import DisplaySection from "../components/DisplaySection";

function Home() {
  let {auth} = useParams();
    return (
      <>
        <div>
          <Header auth={auth}/>
          {console.log("AUTH", auth)}
          <TrendingSlider />
          <DisplaySection category="Classic" />
          <DisplaySection category="Pop" />
          <DisplaySection category="Music" />
        </div>
      </>
    );
}

export default Home;
