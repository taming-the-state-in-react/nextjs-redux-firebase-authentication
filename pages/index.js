import React from "react";

import { AppWithAuthentication } from "../src/components/App";

const LandingPage = () => (
  <AppWithAuthentication>
    <h1>Landing</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed
      in.
    </p>
  </AppWithAuthentication>
);
export default LandingPage;
