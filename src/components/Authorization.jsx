import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { authorizationStart } from "../redux/reducers/authorization";

function Authorization() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();

  const error = useSelector((state) => state.authorization.error);

  const authorizing = useSelector((state) => state.authorization.authorizing);

  const [login, setLogin] = useState("");



  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const [pass, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickAuthorization = () => {
    dispatch(authorizationStart(login, pass));
  };



  return (
    <div className="authorization">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              value={login}
              onChange={handleChangeLogin}
              label="Логин"
              name="логин"
              autoComplete="логин"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={pass}
              onChange={handleChangePassword}
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error && (
                <div className="error-text">Неверный логин или пароль</div>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClickAuthorization}
              disabled={authorizing}
            >
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Authorization;
