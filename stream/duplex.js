/* 
* @Author: lianglizhong
* @Date:   2018-12-31 22:25:17
* @Last Modified by:   lianglizhong
* @Last Modified time: 2018-12-31 22:59:27
*/

'use strict';
/*
    双向流即可读可写流
    Duplex实际上就是继承了Readable和Writable的一类流。
    所以，一个Duplex对象既可当成可读流来使用（需要实现_read方法），也可当成可写流来使用（需要实现_write方法）。
    
 */
const Duplex=require('stream').Duplex;
const duplex=Duplex();

// const json={
//     _readNum:0
// }
// const ctx=this;
// duplex._read=(ctx)=>{
    
//     if(ctx.json._readNum>=10){
//         duplex.push(null);
//     }else{
//         ctx.json._readNum =ctx.json._readNum+1
//         duplex.push("aaa"+ctx.json._readNum+"ccc");
//     }
// }

duplex._read = function () {
  this._readNum = this._readNum || 0
  if (this._readNum > 1) {
    this.push(null)
  } else {
    this.push('' + (this._readNum++))
  }
}
//duplex 监听可读

duplex.on("data",data=>{
    console.log("ondata-->",data.toString())
})

duplex.on("end",()=>{
    console.log("读取完毕")
})

// duplex 监听可写

duplex._write=(buf,enc,next)=>{
   process.stdout.write('_write ' + buf.toString() + '\n')
   next()
}

duplex.write('a')
duplex.write('b')

duplex.end()

duplex.on("finish",()=>{
    console.log("duplex写入完毕")
})

/**
 *    上面的代码中实现了_read方法，所以可以监听data事件来消耗Duplex产生的数据。
同时，又实现了_write方法，可作为下游去消耗数据。

因为它既可读又可写，所以称它有两端：可写端和可读端。
可写端的接口与Writable一致，作为下游来使用；可读端的接口与Readable一致，作为上游来
 * 
 */