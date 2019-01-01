/* 
* @Author: lianglizhong
* @Date:   2018-12-31 22:02:28
* @Last Modified by:   lianglizhong
* @Last Modified time: 2018-12-31 22:24:37
*/

'use strict';
/*

   创建可写流。
    前面通过继承的方式去创建一类可读流，这种方法也适用于创建一类可写流，只是需要实现的是_write(data, enc, next)方法，而不是_read()方法。

    有些简单的情况下不需要创建一类流，而只是一个流对象，可以用如下方式去做：
 */

const Writable=require('stream').Writable;//从stream中给与的一个可写流的类
const writable=Writable(); //对类进行实例化

writable._write=(data,enc,next)=>{
  
  // 将流中的数据写入底层
  process.stdout.write(data.toString().toUpperCase())
  // 写入完成时，调用`next()`方法通知流传入下一个数据
  process.nextTick(next)
}

//结束时是finish
writable.on("finish", () => process.stdout.write('DONE'));

// 写入数据

writable.write("a \n");
writable.write("b \n");
writable.write("c \n");

writable.end();

/**
      1.上游通过调用writable.write(data)将数据写入可写流中,write          方法会自动调用_write() 
      2.在_write中成功写入底层，必须调用next(err)告诉流处理下一个数据
      3.当不在新增数据时writeable.end(data)来结束流，data是可选的
      4.在end方法调用后，当所有底层的写操作均完成时，会触发finish事件。
 * 
 */
