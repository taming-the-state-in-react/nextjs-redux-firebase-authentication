import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../src/store';
import { AppWithAuthentication } from '../src/components/App';

const LandingPage = () =>
  <AppWithAuthentication>
    <h1>Landing</h1>
    <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
  </AppWithAuthentication>

export default withRedux(initStore)(LandingPage);
