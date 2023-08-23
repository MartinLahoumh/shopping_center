import TrendingSlider from "../components/TrendingSlider";
import DisplaySection from "../components/DisplaySection";

function Home() {
  return (
    <>
      <TrendingSlider />
      <DisplaySection sectionName="Test Section" />
      <DisplaySection sectionName="Test Section 2" />
    </>
  );
}

export default Home;
