import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import initStore from '../src/store';
import { AppWithAuthorization } from '../src/components/App';
import { db } from '../src/firebase';

const fromObjectToList = (object) =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(fromObjectToList(snapshot.val()))
    );
  }

  render() {
    const { users } = this.props;

    return (
      <AppWithAuthorization>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        { !!users.length && <UserList users={users} /> }
      </AppWithAuthorization>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of App User IDs (Saved on Sign Up in Firebase Database)</h2>
    {users.map(user =>
      <div key={user.index}>{user.index}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

export default compose(
  withRedux(initStore),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);