import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    const { userId } = ctx.auth;
    if (!userId) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return ctx.prisma.category.findMany({
      where: {
        userId: userId,
      },
    });
  }),
});
