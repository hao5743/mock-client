import util from './util';
import { Random,mock } from 'mockjs';

//自定义随机姓名
Random.extend({
    namezh: function (date) {
        var names = [];
        var f = "赵钱孙李周吴郑王".split(""),
            l = "床前明月光疑是地上霜".split("");
        f.forEach((e) => {
            l.forEach((t) => {
                names.push(e + t);
            })
        })
        return this.pick(names)
    }
})

//使用系统cname随机姓名
Random.extend({
    myname: function(data){
        return Random.cname();
    }
})

//生成随机数据
var b = mock({
    'list|34': [{
        'id|+1': 1,
        'name': '@MYNAME',
        'phone|15610466011-15690469000': 1,
    }]
})

util.writeToFile(b);


