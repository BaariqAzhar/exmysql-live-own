import express from "express";
import posts from "../controllers/post.controller.js";

const postRoutes = (app) => {
  let router = express.Router();

  router.post("/", posts.create);
  router.get("/", posts.findAll);

  app.use("/api/posts", router);
};

export default postRoutes;
