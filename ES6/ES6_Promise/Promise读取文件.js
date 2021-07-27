/*
 * @Author: your name
 * @Date: 2021-07-27 16:28:27
 * @LastEditTime: 2021-07-27 17:28:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ES6-ES11\ES6\ES6_Promise\Promise读取文件.js
 */
//1. 引入 fs 模块
const fs=require('fs');

//2.调用方法读取文件
// fs.readFile('./观书有感.md',(err,data) => {
//     //如果失败，则抛出错误
//     if(err) throw err;
//     console.log(data.toString());
// })

//3.使用 Promise 封装
const p=new Promise(function (resolve,reject) {
    fs.readFile('./观书有感.md',(err,data) => {
        //如果失败
        if(err){
            reject(err);
        }
        resolve(data);
    })
})

p.then(function(value) {
    console.log(value.toString())
},function (reason) {
    console.log('读取失败!!')
})