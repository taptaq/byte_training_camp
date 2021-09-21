const Koa = require("koa");
const path = require("path");

const Router = require("koa-router");

const views = require("koa-views");

const app = new Koa();

//模板引擎
app.use(views(path.join(__dirname, "/views"), { extension: "pug" }));

const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello welcome";
});
app.use(router.routes());

app.on("error", function (err, ctx) {
  console.error("server error", err);
});

app.listen(8086, () => {
  console.log("open server localhost:8086");
});
