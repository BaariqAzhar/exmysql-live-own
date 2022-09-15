const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty! yoyo",
    });
    return;
  }

  const post = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? true : false,
  };

  Post.create(post)
    .then((data) => {
      res.send({
        message: "Post created successfully!",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post.",
      });
    });
};

const findAll = (req, res) => {
  Post.findAll()
    .then((data) => {
      res.send({
        message: "Get all posts successfully!",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    });
};

module.exports = { create, findAll };
