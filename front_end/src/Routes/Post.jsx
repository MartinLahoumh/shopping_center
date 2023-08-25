import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Post() {
  const [postForm, setPostForm] = useState({
    title: "",
    price: "",
    desc: "",
    cat: "",
    img: "",
  });
  const config = { headers: { "Content-Type": "application/json" } };
  const navigate = useNavigate();
  const handleChange = async event => {
    let value = event.target.value;
    const fieldName = event.target.id;
    setPostForm(prevData => ({ ...prevData, [fieldName]: value }));
    console.log("NAME: ", value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/Post`,
        postForm,
        config,
      );
      if (response.data["msg"] == 1) {
        alert("Username not found");
      } else if (response.data["msg"] == 2) {
        alert("Incorrect password");
      } else {
        navigate(`/${response.data["access_token"]}`);
        //return(<Redirect to={"/"+response.access_token} />)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImg = async event => {
    event.preventDefault();

    const data = new FormData();
    const imageFile = document.querySelector("#img");
    // console.log("E: ", event);
    // data.append('file', event.target[0].files[0]);
    try {
      const response = await axios.post(`http://localhost:5000/UploadImage`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Post</h1>
        <iframe name="dummyframe" id="dummyframe"></iframe>
        <form
          action="http://localhost:5000/UploadImage"
          method="POST"
          enctype="multipart/form-data"
          target="dummyframe"
        >
          <label>Image</label>
          <input type="file" name="img" id="img"></input>
          <br />
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
          ></input>
          <br />
          <label>Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
          ></input>
          <br />
          <label>Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            onChange={handleChange}
          ></input>
          <br />
          <label>Category</label>
          <input
            type="text"
            name="cat"
            id="cat"
            onChange={handleChange}
          ></input>
          <br />
          <button type="submit"></button>
          <br />
        </form>
      </div>
    </>
  );
}

export default Post;
