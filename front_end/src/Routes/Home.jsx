import { useParams } from "react-router";
import Header from "../components/Header";
function Home() {
  let {auth} = useParams();
  console.log(auth);
    return (
      <>
        <div>
          <Header auth={auth}/>
          {console.log("AUTH", auth)}
          <ul>
            <li>A dummy list</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li>
            <li>i</li>
            <li>j</li>
          </ul>
        </div>
      </>
    );
}

export default Home;
