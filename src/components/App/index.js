import React from "react";
import { compose } from "recompose";

import Navigation from "../Navigation";
import withAuthentication from "../Session/withAuthentication";
import withAuthorization from "../Session/withAuthorization";

const App = ({ children }) => (
  <div className="app">
    <Navigation />
    <hr />
    {children}
    <hr />
    <span>
      Found in{" "}
      <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">
        Taming the State in React
      </a>
    </span>{" "}
    |{" "}
    <span>
      Star the{" "}
      <a href="https://github.com/rwieruch/nextjs-redux-firebase-authentication">
        Repository
      </a>
    </span>{" "}
    |{" "}
    <span>
      Receive a{" "}
      <a href="https://www.getrevue.co/profile/rwieruch">
        Developer's Newsletter
      </a>
    </span>
    <style jsx>{`
      .app {
        margin: 20px;
      }
    `}</style>
  </div>
);
const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false)
)(App);
const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true)
)(App);
export { AppWithAuthentication, AppWithAuthorization };
