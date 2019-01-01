/*
    stream 流

 */
const fs=require("fs");
const {resolve}=require("path");
const read=require("./read.js");
// 创建一个可读流  ,读取数据并将他输入控制台
const readStream=fs.createReadStream(resolve(__dirname,'./big.text')).pipe(process.stdout);

// 写一个方法不断相面传数据
const json={
    todo:{
        value:Math.random(),
        done:true,
        count:1
    }
}
const readData=new read(json);//此时返回的就是一个流，流才可以监听，流才可以用pipe 
readData.on("data",(data)=>{
    //将数据写入控制台
     process.stdout.write(data)
})

readData.on("end",(data)=>{
    process.stdout.write("done");
}) 

//利用管道输入到控制台
readData.pipe(process.stdout); 

/**
 *   在_read中会一直调用json.value
 * 
 */
