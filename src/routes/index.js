import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import NewMeetup from '~/pages/Meetup/NewMeetup';
import DetailMeetup from '~/pages/Meetup/DetailMeetup';
import EditMeetup from '~/pages/Meetup/EditMeetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup/new" component={NewMeetup} isPrivate />
      <Route path="/meetup/:id" exact component={DetailMeetup} isPrivate />
      <Route path="/meetup/:id/edit" component={EditMeetup} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
