import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/db";
import { todos } from "@/db/schema";

export const todoRouter = createTRPCRouter({
  submitTodo: publicProcedure
    .input(z.object({ text: z.string().min(5) }))
    .mutation( async ({ input })=> {
        const todo = await db.insert(todos).values({
          text: input.text
        }).returning();
        console.log(todo);
      }),

      getTodos: publicProcedure.query( async ()=> {
        return await db.select().from(todos);
      })
});
