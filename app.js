const util = require('util');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
globalvaribale  = "fadghshfshgadf";

async function fn() {
    return await Promise.resolve('hello world');
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});


