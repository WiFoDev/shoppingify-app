import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  getByCategoryId: publicProcedure
    .input(
      z.object({
        categoryId: z.string(),
      })
    )
    .query(({ ctx, input: { categoryId } }) => {
      return ctx.prisma.item.findMany({
        where: {
          categoryId,
        },
      });
    }),
});
