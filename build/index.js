'use strict';

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _mockjs = require('mockjs');

var Mock = _interopRequireWildcard(_mockjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Random = Mock.Random;

//自定义随机姓名
Random.extend({
    namezh: function (date) {
        var names = [];
        var f = "赵钱孙李周吴郑王".split(""),
            l = "床前明月光疑是地上霜".split("");
        f.forEach(e => {
            l.forEach(t => {
                names.push(e + t);
            });
        });
        return this.pick(names);
    }
});

//使用系统cname随机姓名
Random.extend({
    myname: function (data) {
        return Random.cname();
    }
});

//生成随机数据
var b = Mock.mock({
    'list|34': [{
        'id|+1': 1,
        'name': '@MYNAME',
        'phone|15610466011-15690469000': 1
    }]
});

_util2.default.writeToFile(b);