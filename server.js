import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.routes.js";
import db from "./models/index.js";

const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// ? remark if development
// app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    requestBody: req.body,
  });
});

postRoutes(app);

const PORT = 8100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
