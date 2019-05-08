const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const moment = require("moment");
const router = new Router();


router.use("/users",async(ctx,next)=>{
    ctx.state.myId=111;
    console.log("121212");
    await next();
})
router.get("/users",async(ctx,next)=>{
    
    console.log("15-->");
    console.log("ctx.state.myId-->",ctx.state.myId);
    await next();
});

router.get("/users/tx",async(ctx,next)=>{
    
    console.log("222-->");
    console.log("ctx.state.myId-->",ctx.state.myId);
    await next();
});

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3010, () => {
    console.log(`node.js 启动成功 [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
})