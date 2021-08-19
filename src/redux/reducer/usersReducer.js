import {normalizedUsers} from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => ({...acc, [user.id]: user}), {});

export default (state = defaultUsers, action) => {

  switch(action.type) {
    default: return state;
  }

}