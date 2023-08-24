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
          <DisplaySection sectionName="Test Section" />
          <DisplaySection sectionName="Test Section 2" />
        </div>
      </>
    );
}

export default Home;
