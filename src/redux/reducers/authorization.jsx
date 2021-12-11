/** State **/

const initialState = {
  authorizing: localStorage.getItem("authorizing") || false,
  error: false,
};

/** Reducer **/

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case "authorization/success":
      return {
        ...state,
        authorizing: true,
        error: false,
      };

    case "authorization/error":
      return {
        ...state,
        authorizing: false,
        error: true,
      };

    case "auth/logout":
      return {
        ...state,
        authorizing: false,
      };

    default:
      return state;
  }
}

/** Thunks **/

/** Авторизация **/
export const authorizationStart = (login, password) => (dispatch) => {
  fetch(`http://localhost:3010/admins/login=${login}/password=${password}`)
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem("authorizing", true);

      dispatch({
        type: "authorization/success",
        payload: json,
      });
    })
    .catch(() => dispatch({ type: "authorization/error" }));
};

/** Выход из админки **/
export const logoutStart = () => {
  localStorage.removeItem("authorizing");

  return {
    type: "auth/logout",
  };
};
