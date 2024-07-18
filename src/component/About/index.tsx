import React from "react";
import "./index.css";

const About: React.FC = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="About">
            <div className="image">
                <img src="/image/tablesetting2.jpg" alt="" />
            </div>
          <div className="contant">
            <h1>About Catering</h1>
            <p className="text1">Tradition since 1889</p>
            <p className="text2">
              The Catering was founded in blabla by Mr. Smith in lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              iruredolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.We only use <span>seasonal</span>{" "}
              ingredients.
            </p>
            <p className="smalltext">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod temporincididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default About;
