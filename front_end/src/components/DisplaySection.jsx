import DisplayImage from "./DisplayImage";
import "../css/DisplaySection.css";
import PropTypes from "prop-types";

function DisplaySection({ sectionName }) {
  //will use dummy URL thats built in for now but this will need to be fetched from db based on section name

  let artInfoArray = [
    {
      imgURL: "https://i.imgflip.com/6hdfd7.jpg",
      name: "space meme",
      price: 69,
      description: "space meme haha",
      url: "space",
    },
    {
      imgURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Ocean_2022_Blonded.jpg/1200px-Frank_Ocean_2022_Blonded.jpg",
      name: "frank ocean",
      price: 90,
      description: "frank ocean with the blue hoodie",
      url: "frank",
    },
    {
      imgURL:
        "https://pbs.twimg.com/media/DQZag_DVQAABnAf?format=jpg&name=4096x4096",
      name: "brockhampton",
      price: 32,
      description: "saturation iii album art",
      url: "brockhampton",
    },
  ];
  return (
    <>
      <p>{sectionName}</p>
      <div className="display-section-wrapper">
        <div className="art-container">
          {artInfoArray.map((artObject, index) => (
            <DisplayImage
              key={index}
              imgURL={artObject.imgURL}
              name={artObject.name}
              price={artObject.price}
              description={artObject.description}
              url={artObject.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

DisplaySection.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default DisplaySection;
