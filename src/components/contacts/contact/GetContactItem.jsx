import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { changeContact, closeWin } from "../../../redux/reducers/contacts";

function GetContactItem() {
  const dispatch = useDispatch();

  const contactItem = useSelector((state) => state.contacts.contactItem);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const [fullName, setFullName] = useState(contactItem.fullName);
  const [telephone, setTelephone] = useState(contactItem.telephone);
  const [email, setEmail] = useState(contactItem.email);

  const handleChangeFullName = (event) => {
    setFullName(event.target.value);
  };
  console.log(contactItem);
  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changedContact = () => {
    dispatch(changeContact(contactItem.id, fullName, telephone, email));
  };

  const closedWin = () => {
    dispatch(closeWin());
  };

  return (
    <div className="add-contact-window">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Имя и Фамилия"
            multiline
            rowsMax={4}
            value={fullName}
            onChange={handleChangeFullName}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Номер телефона"
            rowsMax={4}
            value={telephone}
            onChange={handleChangeTelephone}
            variant="outlined"
            type="number"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="email"
            multiline
            rowsMax={4}
            value={email}
            onChange={handleChangeEmail}
            variant="outlined"
          />
        </div>
      </form>
      <div className="btns">
        <Button variant="contained" color="primary" onClick={closedWin}>
          Отмена
        </Button>
        <Link to="/contacts">
          <Button variant="contained" color="primary" onClick={changedContact}>
            Сохранить
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default GetContactItem;
