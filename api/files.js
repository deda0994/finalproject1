"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var db_1 = require("../db");
var router = express.Router();
router.post('/', function (req, res) {
    var file = req.body;
    file._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('files').save(req.body).then(function (newfile) {
        res.json(newfile);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('files').find().toArray().then(function (file) {
        res.json(file);
    });
});
router.delete('/:id', function (req, res) {
    var fileId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('files').remove({ _id: fileId }).then(function () {
        res.sendStatus(200);
    });
});
exports.default = router;
