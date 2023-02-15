const router = require("express").Router();
const path = require("path");
const express = require('express');
var axios = require("axios").default;

const config = require("./config");

router.get("/validate-meeting", function (req, res) {
    //using metered getroomApi to check if toom is valid
    var reqParams = {
        method: 'GET',
        url: "https://" + config.METERED_DOMAIN + '/api/v1/room/' + req.query.meetingId,
        params: {secretKey: config.METERED_SECRET_KEY},
        headers: {Accept: 'application/json'},
    };

    axios.request(reqParams).then(function (req,res) {
        console.log(res.data); //RM AFTER DEBUG
        res.send({success: true})
    })
    .catch(function (err) {
        console.error(err); // RM AFTER DEBUG
        res.send({success: false})
    });
});

router.post("/create-meeting-room", function(req, res) {
    //Using the Metered Create Room API to create a newMeeting Room, metered api ports meeting directly back to our page!
    var reqParams = {
        method: 'POST',
        url: "https://" + config.METERED_DOMAIN + '/api/v1/room/',
        params: {secretKey: config.METERED_SECRET_KEY},
        headers: {Accept: 'application/json'},
    };

    axios.request(reqParams).then(function (response) {
        console.log(response); //RM AFTER DEBUG
        res.send({success: true, ...response.data})
    })
    .catch(function (err) {
        console.error(err); //RM AFTER DEBUG
        res.send({success: false})
    });
});

router.get("/metered-domain", function(req, res) {
    res.send({domain: config.METERED_DOMAIN});
});

module.exports = router;