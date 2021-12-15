const express = require("express");
const cors = require("cors");
const app = express();
const monngose = require("mongoose");
const fileRoutes = require("./routes/fileRoutes"); // here import
const config = require("./config/config");
const path = require("path");

app.use(express.json());
app.use(cors());
app.get("/test", (req, res) => {
  res.send("UPDATEDD");
});
app.use("/files", fileRoutes); // here app.use
app.use(express.static(path.join(__dirname, "../client/build")));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

monngose
  .connect(config.DB_CONNECTION, options)
  .then(() =>
    app.listen(config.PORT, () =>
      console.log(`Server running on port: ${config.PORT}`)
    )
  )
  .catch((error) => console.error(error.message));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
