const express = require("express");
require("dotenv").config();

const app = express();

const uploadRouter = require('./routes/upload.routes')
// const { handleError } = require('./utils/errorHandler');
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/upload', uploadRouter)
// app.use(handleError);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
