import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Juan's Portfolio!</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          

          <h2>Welcome</h2>
          <p>
            Welcome to my Portfolio page that was made with the help of React! This was all put together with the help of 
            help of the KU Computer coding bootcamp, online research, and other sources to make this all happen!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
