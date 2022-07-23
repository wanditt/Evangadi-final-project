import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Home.css";
const Home = ({ logout }) => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);
  return (
    <div className="home">
      {/* show username in homepage */}
      <div className="home_top">
        <Link to="/askquestion">
          <button className="home_topbtn"> Ask Question </button>
        </Link>
        <h1>WelCome {userData.user?.display_name}</h1>
      </div>
      {/* logout when the button clicked in which the function comes from app.js */}
      {/* <button onClick={logout}>Log out</button> */}
    </div>
  );
};

export default Home;
