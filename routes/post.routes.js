module.exports = (app) => {
  const posts = require("../controllers/post.controller");

  let router = require("express").Router();

  router.post("/", posts.create);

  app.use("/api/posts", router);
};
