/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const itemRouter = createTRPCRouter({
  getByCategoryId: protectedProcedure
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
  create: protectedProcedure
    .input(
      z.object({
        name: z.string({ required_error: "An item name is required" }),
        categoryId: z.string({ required_error: "A category id is required" }),
        note: z.string().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { userId } = ctx.auth;
      return ctx.prisma.item.create({
        data: {
          ...input,
          userId: userId!,
        },
      });
    }),
});
