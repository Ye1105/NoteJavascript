
//1.引入 fs 模块
const fs=require('fs');


function readWeiXue() {
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/为学.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            resolve(data);
        })
    })
}

function readChaYangShi() {
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/插秧诗.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            resolve(data);
        })
    })
}

function readGuanShuYouGan() {
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/观书有感.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            resolve(data);
        })
    })
}

//声明一个 async 函数

async function main() {
        //获取为学内容
        let weixue=  await readWeiXue();

        //获取插秧诗内容
        let chayang = await readChaYangShi();
        // 获取观书有感
        let guanshu = await readGuanShuYouGan();
    
        console.log(weixue.toString());
        console.log(chayang.toString());
        console.log(guanshu.toString());
}
main();