import { Link } from "react-router-dom";

const Home = () => {

  return(
    <>
      <h2>home</h2>
      <div className="link-css">
        <span className="emphasis">Modal</span>の表示は<Link to={`/modal/`}>こちらから</Link>
      </div>
      <div className="link-css">
      <span className="emphasis">Popup</span>の表示は<Link to={`/popup/`}>こちらから</Link>
      </div>
      <div className="link-css">
      <span className="emphasis">Toast</span>の表示は<Link to={`/toast/`}>こちらから</Link>
      </div>
    </>

  );
}

export default Home;
