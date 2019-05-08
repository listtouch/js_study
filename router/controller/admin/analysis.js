const router=require("koa-router")();
router.get("/analysis/index",async(ctx,next)=>{
    ctx.body="这是后台分析界面";
    await next();
})

router.get("/analysis/add",async(ctx,next)=>{
    ctx.body="这是后台分析的添加界面";
    await next();
})

router.get("/analysis/detail",async(ctx,next)=>{
    ctx.body="这是后台分析详情界面";
    await next();
})

module.exports=router;