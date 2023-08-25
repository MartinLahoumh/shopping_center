import { useParams } from "react-router";
import TrendingSlider from "../components/TrendingSlider";
import DisplaySection from "../components/DisplaySection";
import "../css/Home.css";

function Home() {
  let { auth } = useParams();
  return (
    <>
      <div className="homeContent">
        {console.log("AUTH", auth)}
        <TrendingSlider />
        <DisplaySection sectionName="Pop" />
        <DisplaySection sectionName="Photography" />
      </div>
    </>
  );
}

export default Home;
