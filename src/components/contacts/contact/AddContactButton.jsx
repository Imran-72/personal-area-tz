import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/reducers/contacts";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AddIcon from '@material-ui/icons/Add';

function AddContactButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal());
  };

  return (
    <Link to="/addContactWindow">
      <Button variant="contained" color="primary" onClick={handleClick}>
        <AddIcon fontSize="small" />
        <PersonOutlineIcon fontSize="small" />
      </Button>
    </Link>
  );
}

export default AddContactButton;
