const parser = require('./index');

const str = `/**
* 检测一个字符串中是否含有中文
* @param {String} text 输入字符串
* @return {Boolean} value 是否含有中文
*/`;

console.log(parser(str));
debugger;