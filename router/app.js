const koa=require("Koa");
const app=new koa();
const moment=require("moment");
const router=require("./router");

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3002,()=>{
    console.log(`系统已经启动 ${moment().format("YYYY-MM-DD HH:mm:ss")}`)
})