/*
 * @Author: your name
 * @Date: 2021-07-28 10:16:39
 * @LastEditTime: 2021-07-28 11:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ES6-ES11\ES6\ES6_Promise\6-Promise实践-读取多个文件.js
 */
//引入 fs 模块
const fs = require("fs");
const { Console } = require("node:console");

// fs.readFile('./resources/为学.md',(err,data1) => {
//     fs.readFile('./resources/观书有感.md',(err,data2) => {
//         fs.readFile('./resources/插秧诗.md',(err,data3) => {
//             let result=data1+'\r\n'+data2+'\r\n'+data3;
//             console.log(result)
//         })
//     })
// })

//使用 promise 实现
const p=new Promise((resolve,reject) => {
    fs.readFile('./resources/为学.md',(err,data) => {
        resolve(data);
    })
})

p.then(value=>{
    return new Promise((resolve,reject) => {
        fs.readFile('./resources/插秧诗.md',(err,data) => {
            resolve([value,data])
        })
    })
}).then(value=>{
    return new Promise((resolve,reject) => {
        fs.readFile('./resources/观书有感.md',(err,data) => {
            //压入
            value.push(data);
            resolve(value)
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'))
})