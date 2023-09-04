const express = require("express");
const Database = require("./database");
const path = require("path");

const app = express();
const port = process.env.PORT;
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", async (req, res) => {
  const db = Database.getInstance();
  const users = await db.querySelectAll("users");
  res.render("index", { users: users });
});

app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const db = Database.getInstance();
  const userName = req.body.username;
  await db.insertUser({ name: userName });

  res.redirect("/");
});

app.listen(port, async () => {
  const db = Database.getInstance();
  await db.connect(dbConfig);
  await db.createTables();
  await db.seedUser();

  console.log(`App listening on port ${port}`);
});
