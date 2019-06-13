import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = { username: this.props.username, userAvatar: this.props.userAvatar, };

  handleChange = (e, { name, value, }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser({ ...this.state, })
  }

  render() {
    const { username, userAvatar, } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
         />
        <Form.select 
          label="User Avatar"
          name="userAvatar"
          value={userAvatar}
          onChange={this.handleChange}
          options={avatarOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const avatarOptions = [
  { key: "p", text: "Peon", value: "Peon", },
  { key: "k", text: "Knight", value: "Knight", },
  { key: "d", text: "Duke", value: "Duke", },
  { key: "q", text: "Queen", value: "Queen",},
  { key: "e", text: "Emperor", value: "Emperor", },
]

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
          { ...props }
          username={value.username}
          userAvatar={value.userAvatar}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
};

export default ConnectedUserForm