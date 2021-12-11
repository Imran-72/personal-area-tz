import React from "react";
import Button from "@material-ui/core/Button";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../../../redux/reducers/contacts";

function Contact(props) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(props.contact.id));
  };

  const get = () => {
    dispatch(getContact(props.contact));
  };

  return (
    <div className="contact">
      <div className="fullName">
        <PersonOutlineIcon fontSize="small" />
        {props.contact.fullName}
      </div>
      <div className="telephone">
        <PhoneAndroidIcon fontSize="small" />
        {props.contact.telephone}
      </div>
      <div className="email">
        <AlternateEmailIcon fontSize="small" />
        {props.contact.email}
      </div>
      <Button variant="contained" color="primary" onClick={get}>
        Изменить
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeleteClick}>
        Удалить
      </Button>
    </div>
  );
}

export default Contact;
