const { Router } = require("express");
const { postModel } = require("../schema/post");

const post = Router();

post.post("/posts", async (req, res) => {
  try {
    const newpost = new postModel(req.body);
    await newpost.save();
    res.status(201).send({
      message: "New post Added successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

post.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

post.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await postModel.findOne({ _id: id });
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

post.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndUpdate(id, req.body);
    res.status(204).send({
      message: "post details updated successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

post.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id, req.body);
    res.status(202).send({
      message: "post deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = {
  post,
};

