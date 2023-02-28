const express = require("express");
const { connection } = require("./config/config");
const { post } = require("./routes/browseRoutes");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", post);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen(port, async () => {
  try {
    await connection.then(() => {
      console.log("Database connected");
      console.log(`Server started on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
});
