const router=require("koa-router")();
router.get("/admin/index",async(ctx,next)=>{
    ctx.body="这是后台界面";
    await next();
})

router.get("/admin/add",async(ctx,next)=>{
    console.log("88")
    ctx.body="这是后台的添加界面";
    await next();
})

router.get("/admin/detail",async(ctx,next)=>{
    ctx.body="这是后台详情界面";
    await next();
})

module.exports=router;