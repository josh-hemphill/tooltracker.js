import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const port: number = 8181;

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api/v1/test", ({ response }: { response: any }) => {
  response.body = "Hello World";
});

console.log(`Server Running on Port: ${port}`);

await app.listen({ port });
