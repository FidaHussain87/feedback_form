// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

const port = 3001;

app.use(bodyParser.json());

app.post("/submit-feedback", (req, res) => {
  try {
    const feedback = req.body.feedback;
    if (!feedback) {
      res.status(400).send("Feedback cannot be empty!");
      return;
    }
    res.send("Feedback received successfully!");
  } catch (error) {
    console.error("Error processing feedback:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
