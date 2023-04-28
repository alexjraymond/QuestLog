import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const generateRouter = createTRPCRouter({
    generateQuest: protectedProcedure.input(z.object({
        prompt: z.string()
    }))
    .mutation(async ({ctx, input}) => {
        console.log('we are here', input.prompt)
        //verify user has enough credits
        const {count} = await ctx.prisma.user.updateMany({
            where: {
                id: ctx.session.user.id,
                credits: {
                    gte: 1,
                }
            },
            data: {
                credits: {
                    decrement: 1,
                }
            }
        })

        if (count <= 0) {
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'you do not have enough credits'
            })
        }

        // TODO: make a request to dalle api with the prompt the user provides

        return {
            message: 'success'
        }
    })
});