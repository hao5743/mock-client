"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class Util {
    static print(data) {
        console.log(JSON.stringify(data, null, 2));
    }
    static writeToFile(data) {
        let txt = JSON.stringify(data, null, 2);
        fs.writeFile("src/answer.json", txt, function (err) {
            if (err) throw err;
            console.log("File Saved !"); //文件被保存
        });
    }
}

exports.default = Util;