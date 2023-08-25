import DisplayImage from "./DisplayImage";
import "../css/DisplaySection.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
function DisplaySection(props) {
  //will use dummy URL thats built in for now but this will need to be fetched from db based on section name
  const [posts, setPosts] = useState([]);
  const fetchPost = async ()=>{
    const config = {headers:{'Content-Type': 'application/json'}};
    const response = await axios.get(`http://localhost:5000/PostCat/${props.category}`);
    setPosts(response.data);
  }
  useEffect(()=>{
    fetchPost();
  },[])

  return (
    <>
      <p>{props.category}</p>
      <div className="display-section-wrapper">
        <div className="art-container">
          {posts.map((post, index) => (
            <DisplayImage
              imgURL={post.img}
              name={post.title}
              price={post.price}
              description={post.description}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

DisplaySection.propTypes = {
  category: PropTypes.string.isRequired,
};

export default DisplaySection;
