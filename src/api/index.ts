import { Elysia, t } from "elysia";
import { fromTypes, openapi } from "@elysiajs/openapi";

export default new Elysia({ prefix: "/api" })
  .use(
    openapi({
      references: fromTypes(),
      documentation: {
        info: {
          title: "Next.js + Elysia + Bun API",
          version: "1.0.50",
        },
      },
    }),
  )
  .get("/user", () => ({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  }))
  .post("/user", ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
      email: t.String({ format: "email" }),
    }),
  });
