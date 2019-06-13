import React, { useContext, } from 'react';
import { Card, } from 'semantic-ui-react';
import { UserContext, } from '../providers/UserProvider';

const User = () => {
  const {username, dateJoined, userAvatar, } = useContext(UserContext)

  return(
      <Card>
        <Card.Content>
          <Card.Header>{username}</Card.Header>
          <Card.Meta>
            Date Joined: {dateJoined}
      </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Avatar: {userAvatar}</p>
        </Card.Content>
      </Card>
  )
};

export default User;