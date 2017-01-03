import * as fs from 'fs';

class Util {
    static print(data) {
        console.log(JSON.stringify(data, null, 2))
    }
    static writeToFile(data) {
        let txt = JSON.stringify(data, null, 2);
        fs.writeFile("src/answer.json", txt, function (err) {
            if (err) throw err;
            console.log("File Saved !"); //文件被保存
        });
    }
}

export default Util;