const router=require("koa-router")();
const fs=require("fs");
const path=require("path");
class ComposeRouter {
    constructor(opt){
       
       this.listArr=[];

    } 
    // 读取所有的路由的目录
     readController(dir="./../controller"){
        const dirArr=fs.readdirSync(path.resolve(__dirname,dir));
        for(let x=0;x<dirArr.length;x++){
            // 判断这个目录是否是文件夹
            if(fs.statSync(`${path.resolve(__dirname,dir)}/${dirArr[x]}`).isDirectory()){
                this.readController(`${dir}/${dirArr[x]}`);
                
            }else{
                Array.prototype.push.call(this.listArr,`${dir}/${dirArr[x]}`);
            }
        }
        
      

    }
    
     routerList (){
         this.readController();
       console.log("this.listArr11-->",this.listArr);
      // 结合koa-router 进行路由的拼装
       return 123
    }
}



module.exports=ComposeRouter;