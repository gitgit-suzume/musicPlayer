const express = require("express");
const router = express();
const { createWebAPIRequest } = require("../util/util");

router.get("/", (req, res) => {
  const cookie = req.get("Cookie") ? req.get("Cookie") : "";
  const data = {
    csrf_token: ""
  };
  const url = req.query.type == "add" ? "follow" : "delfollow";
  const id = req.query.id;
  createWebAPIRequest(
    "music.163.com",
    `/weapi/user/${url}/${id}`,
    "POST",
    data,
    cookie,
    music_req => {
      res.send(music_req);
    },
    err => res.status(502).send("fetch error")
  );
});

module.exports = router;
