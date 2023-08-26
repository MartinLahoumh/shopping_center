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
      <div className='sign-form-wrap'>
        <h1 className='sign-title'>Post</h1>
        <iframe name="dummyframe" id="dummyframe" ></iframe>
        <form className='sign-form' action='http://localhost:5000/Post' method='POST' enctype = "multipart/form-data" target="dummyframe">
          <label className='sign-form-subtitle'>Image</label>
          <input type="file" name="img" id="img"></input>
          <br />
          <label className='sign-form-subtitle'>Title</label>
          <input type="text" name="title" id="title" value={postForm['title']}onChange={handleChange}></input>
          <br />
          <label className='sign-form-subtitle'>Credit</label>
          <input type="text" name="credit" id="credit" onChange={handleChange}></input>
          <br />
          <label className='sign-form-subtitle'>Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
          ></input>
          <br />
          <label className='sign-form-subtitle'>Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            onChange={handleChange}
          ></input>
          <br />
          <label className='sign-form-subtitle'>Category</label>
          <input
            type="text"
            name="cat"
            id="cat"
            onChange={handleChange}
          ></input>
          <br />
          <button className='artButton' type="submit">Post</button>
          <br />
        </form>
      </div>
    </>
  );
}

export default Post;
