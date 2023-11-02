const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/gomoku", require("./routes/gomoku_routes.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http server listening on port ${PORT}`);
});
