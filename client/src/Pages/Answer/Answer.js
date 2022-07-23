import React from "react";
import "./Answer.css";
import { MdAccountCircle } from "react-icons/md";

function Answer() {
  return (
    <div className="answer">
      <div className="atop">
        <div className="atquest">
          <div>
            <h3>Question</h3>
          </div>
          <div>'title'</div>
          <div>'description'</div>
        </div>
        <hr />
        <div>
          <h3>Answer From The Community</h3>
        </div>
        <hr />
        <div>
          <div className="profile">
            <MdAccountCircle style={{ fontSize: 90 }} className="atpic" />
          </div>
          <div>'username'</div>
        </div>
      </div>
      <div className="abottom">
        <div>
          <center>
            <div className="abtext">Answer The top Question</div>
          </center>
          <center>
            <div className="answerext">Answer The top Question</div>
          </center>

          <div className="abdiv">
            <form>
              {/* <label className="alabel">Your Answer...</label> */}
              <input className="ainp" placeholder="Your Answer..."></input>{" "}
              <br />
              <button className="abutton">Post your Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
