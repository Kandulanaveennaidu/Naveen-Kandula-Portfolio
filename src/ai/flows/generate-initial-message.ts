'use server';

/**
 * @fileOverview This flow generates an initial message for the chatbot preview.
 *
 * - generateInitialMessage - A function that generates the initial message.
 * - GenerateInitialMessageInput - The input type for the generateInitialMessage function.
 * - GenerateInitialMessageOutput - The return type for the generateInitialMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialMessageInputSchema = z.object({
  topic: z.string().describe('The topic the user is interested in.'),
});
export type GenerateInitialMessageInput = z.infer<typeof GenerateInitialMessageInputSchema>;

const GenerateInitialMessageOutputSchema = z.object({
  message: z.string().describe('The initial message for the chatbot preview.'),
});
export type GenerateInitialMessageOutput = z.infer<typeof GenerateInitialMessageOutputSchema>;

export async function generateInitialMessage(input: GenerateInitialMessageInput): Promise<GenerateInitialMessageOutput> {
  return generateInitialMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialMessagePrompt',
  input: {schema: GenerateInitialMessageInputSchema},
  output: {schema: GenerateInitialMessageOutputSchema},
  prompt: `You are a helpful chatbot assistant for Kandula Naveen's portfolio. Generate an initial message to start a conversation with a visitor about the topic: {{{topic}}}.`,
});

const generateInitialMessageFlow = ai.defineFlow(
  {
    name: 'generateInitialMessageFlow',
    inputSchema: GenerateInitialMessageInputSchema,
    outputSchema: GenerateInitialMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
