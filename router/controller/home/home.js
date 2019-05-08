const router=require("koa-router")();
router.get("/home/index",async(ctx,next)=>{
    ctx.body="这是前台home界面";
    await next();
})

router.get("/home/add",async(ctx,next)=>{
    ctx.body="这是前台home的添加界面";
    await next();
})

router.get("/home/detail",async(ctx,next)=>{
    ctx.body="这是前台home详情界面";
    await next();
})

module.exports=router;