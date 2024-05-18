import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, ADD_USER, DELETE_USER, UPDATE_USER } from "../constants";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add other user fields as necessary
}

interface State {
  users: any | null;
  error: string | null;
}

const initialState: State = {
  users: null,
  error: null,
};

export default function reducer(state: State = initialState, action: any): State {
  let { type, payload } = action;
  console.log("payload",payload)

  switch (type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: payload, error: null };

    case FETCH_USER_FAILURE:
      return { ...state, error: payload };

    case ADD_USER:
      return { ...state, users: state.users ? [...state.users, payload] : [payload] };

    case DELETE_USER:
      return { ...state, users: state.users ? state.users.filter((user : any ) => user.id !== payload) : null };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users ? state.users.map((user : any ) => (user.id === payload.id ? payload : user)) : null
      };

    default:
      return state;
  }
}
