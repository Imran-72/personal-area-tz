const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: "./build",
});

const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.use(middlewares);

const admins = router.db.get("admins");

server.get("/admins/login=:login/password=:password", (req, res) => {
  const admin = admins.find((item) => item.login === req.params.login);
  const password = admin.toJSON().password;
  return password === req.params.password ? res.json(admin) : res.json();
});

server.use(router);

server.listen(process.env.PORT || 3010, function () {
  console.log("JSON Server is running");
});
