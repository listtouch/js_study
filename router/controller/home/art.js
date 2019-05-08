const router=require("koa-router")();
router.get("/art/index",async(ctx,next)=>{
    ctx.body="这是前台art界面";
    await next();
})

router.get("/art/add",async(ctx,next)=>{
    ctx.body="这是前台art的添加界面";
    await next();
})

router.get("/art/detail",async(ctx,next)=>{
    ctx.body="这是前台art详情界面";
    await next();
})

module.exports=router;