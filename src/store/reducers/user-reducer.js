const initState = {
  username: '',
  password: '',
}

const userReducer = (state = initState, action) => {
  switch(action.type){
    case 'SIGN_UP_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
