/* 
* @Author: lianglizhong
* @Date:   2018-12-31 23:00:11
* @Last Modified by:   lianglizhong
* @Last Modified time: 2018-12-31 23:03:51
*/

'use strict';

// 在上面的例子中，可读流中的数据（0, 1）与可写流中的数据（'a', 'b'）是隔离开的，但在Transform中可写端写入的数据经变换后会自动添加到可读端。
// Tranform继承自Duplex，并已经实现了_read和_write方法，同时要求用户实现一个_transform方法。
// 
const Transform = require('stream').Transform

class Rotate extends Transform {
  constructor(n) {
    super()
    // 将字母旋转`n`个位置
    this.offset = (n || 13) % 26
  }

  // 将可写端写入的数据变换后添加到可读端
  _transform(buf, enc, next) {
    var res = buf.toString().split('').map(c => {
      var code = c.charCodeAt(0)
      if (c >= 'a' && c <= 'z') {
        code += this.offset
        if (code > 'z'.charCodeAt(0)) {
          code -= 26
        }
      } else if (c >= 'A' && c <= 'Z') {
        code += this.offset
        if (code > 'Z'.charCodeAt(0)) {
          code -= 26
        }
      }
      return String.fromCharCode(code)
    }).join('')

    // 调用push方法将变换后的数据添加到可读端
    this.push(res)
    // 调用next方法准备处理下一个
    next()
  }

}

var transform = new Rotate(3)
transform.on('data', data => process.stdout.write(data))
transform.write('hello, ')
transform.write('world!')
transform.end()

// khoor, zruog!