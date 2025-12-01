const express = require("express");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/posts", postRoutes);


app.get("/", (req, res) => {
  console.log("here");
  res.render("index", {user:"Vincent"});
});
app.listen(3030);

function logger(req, res, next) {
  console.log(`page accessed: ${req.originalUrl}`);
  next();
}