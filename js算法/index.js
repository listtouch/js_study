/* 
* @Author: lianglizhong
* @Date:   2018-12-23 17:35:42
* @Last Modified by:   lianglizhong
* @Last Modified time: 2018-12-23 21:36:18
*/

'use strict';

/**
 *
 * 1. js的判断是否为回文
 *
 *   说明:回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比
 *    如mamam redivider .
 */

const reverse=function (string){
    const str=string.toString();
    if (str===str.split("").reverse().join('')) {
        console.log(string+"是回文类型的单词")
    }else{
        console.log(string+"不是回文类型的单词")
    }
}

reverse("mam");
reverse("asds");

/**
 *
 *  去掉一组整型数组重复的值
 *  比如 输入: [1,3,4,5,12,1,3]，  输出: [1,3,4,5,12] 
 *  利用object去除 或es6新特新
 *  
 */

const sortArr1=function(arr){
    console.log(Array.from(new Set(arr)));
}

sortArr1([1,3,4,5,12,1,3]);

const sortArr2=function(arr){
    const obj={};
    const newArr=[];
    for(let x=0;x<arr.length;x++){
        if(!obj[arr[x]]){
            obj[arr[x]]=true;
            newArr.push(arr[x]);
        }
    }
    console.log("newArr-->",newArr);
}
sortArr2([1,3,4,5,12,1,3]);

/**
 *
 *  
 *  统计一个字符串出现最多的字母
 *  asdasdsaaaaaaasssdaaaa  输出 ： a
 *  
 */
const countWorld=function(str){
    // 长度为1直接返回
    if(Number(str.length)===1){
        return str;
    }

    // 用于盛放重复的字母做key和记录重复数目
    const objStr={};
    for(let i=0;i<str.length;i++){
        if(!objStr[str.charAt(i)]){
            objStr[str.charAt(i)]=1
        }else{
             objStr[str.charAt(i)]+=1
        }
    }

    console.log("objStr-->",objStr);
    // 作比较 3个数字比较设一变量保存
    let maxValue=1;
    let maxkey="";
    for(let key in objStr){
        if(objStr[key]>maxValue){
            maxValue=objStr[key];
            maxkey=key;
        }
    }

    console.log(`重复最多的字母是${maxkey},重复次数是${maxValue}`);

}

countWorld("qwewqewqewqwwwwicgd");
countWorld("aassddffgga");

/**
 *
 *  
 *  冒泡排序法
 *  原理：1.比较前后俩个位置的数字，大的在后，小的在前
 *        2.第一轮排序完成,最后一位数字最大
 *  
 */

const sort=function(arr){
    for(let x=0;x<arr.length-1;x++){
        for(let y=x+1;y<arr.length;y++){
            
            if(arr[x]>arr[y]){
                const tmp=arr[x];
                arr[x]=arr[y];
                arr[y]=tmp;
            }


        }

         console.log("x-->"+x,arr);
    }
   
} 

sort([4,8,7,13,17,2,1]);

/**
 *
 * 不借助临时变量来进行数值的交换
 */

