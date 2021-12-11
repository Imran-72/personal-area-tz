import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getEmail,
  getFullName,
  getTelephone,
} from "../../../redux/reducers/contacts";

function AddContactWindow() {
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const fullName = useSelector((state) => state.contacts.fullName);

  const telephone = useSelector((state) => state.contacts.telephone);

  const email = useSelector((state) => state.contacts.email);

  const handleChangeFullName = (event) => {
    dispatch(getFullName(event.target.value));
  };

  const handleChangeTelephone = (event) => {
    dispatch(getTelephone(event.target.value));
  };

  const handleChangeEmail = (event) => {
    dispatch(getEmail(event.target.value));
  };

  const sendContact = () => {
    dispatch(addContact());
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
            label="email*"
            multiline
            rowsMax={4}
            value={email}
            onChange={handleChangeEmail}
            variant="outlined"
          />
        </div>
      </form>
      <div className="btns">
        <Link to="/contacts">
          <Button variant="contained" color="primary">
            Назад
          </Button>
        </Link>
        {fullName.length && telephone.length && email.length !== 0 ? (
          <Link to="/contacts">
            <Button variant="contained" color="primary" onClick={sendContact}>
              Добавить
            </Button>
          </Link>
        ) : (
          <Link to="/contacts">
            <Button
              variant="contained"
              color="primary"
              onClick={sendContact}
              disabled
            >
              Добавить
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default AddContactWindow;
