// 该js 是将所有的router 利用路由嵌套合并在一起
const router = require("koa-router")();
const admin = require("./controller/admin/admin");
const analysis = require("./controller/admin/analysis");

const art = require("./controller/home/art");
const home = require("./controller/home/home");

const Routes=require("./middleware/router");
const routes=new Routes();

console.log(routes.routerList())


// 合并admin，analysis
router.use("/admin", admin.routes(), admin.allowedMethods())
router.use("/admin", analysis.routes(), analysis.allowedMethods())
router.use("/home", art.routes(), art.allowedMethods())
router.use("/home", home.routes(), home.allowedMethods())
// console.log("router-->",router);

module.exports = router;

