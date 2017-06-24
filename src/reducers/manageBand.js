export default function manageUsers(state = {
  users: []
}, action){
  switch (action.type) {
    case 'ADD_USER':
      return { users: state.users.concat(action.user)}
      break;
    default:
      return state
  }
}
