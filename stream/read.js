/* 
* @Author: lianglizhong
* @Date:   2018-12-31 21:18:39
* @Last Modified by:   lianglizhong
* @Last Modified time: 2018-12-31 21:59:42
*/
const Readable=require("stream").Readable;
'use strict';
module.exports=class extends Readable{
    constructor (fnc){
        super();
        this.iterator=fnc;
    }

    _read (){
        const res=this.iterator.todo;
       if(res.count<=20){
       
        this.iterator.todo.count +=1;

        this.push(res.value+"aaa")
       } else{
         this.push(null);
       }
    }
}


/**总结：
1._read方法是从底层系统读取具体数据的逻辑，即生产数据的逻辑。
2.在_read方法中，通过调用push(data)将数据放入可读流中供下游消耗。
3.在_read方法中，可以同步调用push(data)，也可以异步调用。
4.当全部数据都生产出来后，必须调用push(null)来结束可读流。
5.流一旦结束，便不能再调用push(data)添加数据。
6.可以通过监听data事件的方式消耗可读流。

1.在首次监听其data事件后，readable便会持续不断地调用_read()，通过触发data事件将数据输出。
2.第一次data事件会在下一个tick中触发，所以，可以安全地将数据输出前的逻辑放在事件监听后（同一个tick中）。
3.当数据全部被消耗时，会触发end事件。
**/