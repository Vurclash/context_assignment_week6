import React from 'react';

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "Lotturas",
    dateJoined: "02/01/2015",
    userAvater: "Emperor",
    updateUser: (user) => this.updateUser(user)
  };

  updateUser = (user) => {
    this.setState({ ...user, })
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  };
};

export default UserProvider