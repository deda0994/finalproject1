"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://userde09:Tallgirl17@ds121192.mlab.com:21192/codercamps17';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
