/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    const { userId } = ctx.auth;
    return ctx.prisma.category.findMany({
      where: {
        userId: userId!,
      },
    });
  }),
  create: protectedProcedure
    .input(z.string({ required_error: "A category name is required" }))
    .mutation(({ ctx, input }) => {
      const { userId } = ctx.auth;
      return ctx.prisma.category.create({
        data: {
          name: input.toLowerCase(),
          userId: userId!,
        },
      });
    }),
});
