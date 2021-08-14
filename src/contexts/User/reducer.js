export const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case "login":
      return {
        ...state,
        ...action.payload,
        loggedIn: true
      }
    case "contact":
      return {
        ...state,
        ...action.payload,
      }
    case "logout":
      return initialState;
    default:
      return state;
  }
}

export const initialState = {
  loggedIn: false,
  name: "",
  email: ""
}