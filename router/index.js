const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const moment = require("moment");

const router = new Router();

router.get("/index", async (ctx, next) => {
    console.log("123");
    ctx.body = "这是第一个路由";
    await next();
})

router.get('user', '/users/:id',async (ctx, next) => {
    console.log("user-->","这是个user");
    console.log("user-->",ctx.params.id); 
    console.log("url-->",ctx.url);
    await next();
});
   
router.url('user', 3);

// 镶嵌的路由
const forums = new Router();
const posts = new Router();

posts.get('/', async(ctx, next) => {
    console.log("镶嵌的路由111/",ctx.url);
    await next();
});
posts.get('/:pid', async(ctx, next) => {
    console.log("镶嵌的路由222/",ctx.url);
    await next();
});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
app.use(forums.routes());

app.use(router.routes())
   .use(router.allowedMethods());


// 前缀路由
const prefixRouter=new Router({
    prefix: '/my/Router'
});
prefixRouter.get("/",async(ctx,next)=>{
    console.log("/my/Router-->",ctx.url);
    await next();
});

app.use(prefixRouter.routes())
   .use(prefixRouter.allowedMethods());

app.listen(3000, () => {
    console.log(`node.js 启动成功 [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
})