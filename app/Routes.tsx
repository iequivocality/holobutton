/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MemberSoundboardPage from './containers/MemberSoundboardPage';

// Lazily load routes and code split with webpack
const LazyMembersPage = React.lazy(() =>
  import(/* webpackChunkName: "MembersPage" */ './containers/MembersPage')
);

const MembersPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyMembersPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.MEMBERS} component={MembersPage} />
        <Route path={routes.MEMBER} component={MemberSoundboardPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
