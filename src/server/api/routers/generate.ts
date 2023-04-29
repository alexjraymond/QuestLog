import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { Configuration, OpenAIApi } from "openai";
import { env } from "process";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const generateRouter = createTRPCRouter({
    generateQuest: protectedProcedure.input(z.object({
        title: z.string(),
        description: z.string()
    }))
    .mutation(async ({ctx, input}) => {
        console.log('we are here', input.description)
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

        // makes a request to openai api with the description the user provides

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Turn this typical daily task into a world of warcraft-type quest for a brave adventurer.  Make sure to have a quest name and a quest description:\noriginal name: ${input.title}\noriginal description: ${input.description}`,
    temperature: 1,
    max_tokens: 1672,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const yourQuest = response.data.choices[0]?.text;

        return {
            returnedQuest: yourQuest
        }
    }),
    createQuest: protectedProcedure
        .input(
            z.object({
                title: z.string(),
                description: z.string(),
                questTitle: z.string(),
                questDescription: z.string()
            })
        )
        .mutation(async ({input, ctx }) => {
            const inputQuest = await ctx.prisma.quest.create({
                data: {
                    ...input,
                }
            })
            return inputQuest
        }),
    getQuests: protectedProcedure.query(async ({ ctx }) => {
        const quests = await ctx.prisma.quest.findMany();
        return quests
    }),
});