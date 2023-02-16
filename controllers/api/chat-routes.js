const express = require("express");
const path = require("path");
const fs = require("fs");
const router = require('express').Router();
const { Chat } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // const dbChat =
    res.render('chatroom');

    // const chatLogs = await Chat.findAll();
    // res.status(200).json({chatLogs});
  }

  catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
 
  console.log(req.body);
    Chat.create(req.body)
    .then((chatLogs) => {
      res.status(200).json(chatLogs);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
