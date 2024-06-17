"use strict";
const User = require("./user"); //require the model
const Post = require("./post");

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  Post,
  // also export any extra models here
};
