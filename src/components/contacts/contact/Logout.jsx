import React from "react";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../../redux/reducers/authorization";

function Logout() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    dispatch(logoutStart());
  };
  return (
    <div className="logout">
      <button onClick={logout}>
        Выйти
      </button>
    </div>
  );
}

export default Logout;
