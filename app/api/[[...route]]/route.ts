import { z } from "zod";

import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({
        error: "Вы не авторизованы!",
      });
    }

    return c.json({
      message: "Hello HOMEBANK",
      userId: auth.userId,
    });
  })
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        name: z.string(),
        userId: z.string(),
      }),
    ),
    (c) => {
      const { name, userId } = c.req.valid("json");

      return c.json({
        name: name,
        userId: userId,
      });
    },
  );

export const GET = handle(app);
export const POST = handle(app);
