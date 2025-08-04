'use server';
/**
 * @fileOverview This flow continues a conversation with the portfolio chatbot.
 *
 * - continueConversation - A function that generates the next message in the conversation.
 * - ContinueConversationInput - The input type for the continueConversation function.
 * - ContinueConversationOutput - The return type for the continueConversation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContinueConversationInputSchema = z.object({
  message: z.string().describe('The user message to respond to.'),
  history: z.array(z.any()).optional().describe('The conversation history.'),
});
export type ContinueConversationInput = z.infer<typeof ContinueConversationInputSchema>;

const ContinueConversationOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type ContinueConversationOutput = z.infer<typeof ContinueConversationOutputSchema>;

export async function continueConversation(input: ContinueConversationInput): Promise<ContinueConversationOutput> {
  return continueConversationFlow(input);
}

const professionalProfile = `
Name: Kandula Naveen

Summary: An innovative Full Stack Developer with over 2.7 years of experience, specializing in transforming traditional applications into intelligent, AI-driven solutions. Expert in bridging complex AI technologies with user-friendly interfaces through chatbot development, conversational AI, and smart automation systems.

Skills:
- AI & Machine Learning: Chatbot Development, NLP, Conversational AI, OpenAI API, Dialogflow, Microsoft Bot Framework
- Frontend: React.js, TypeScript, Redux, JavaScript (ES6+), HTML5 & CSS3, Tailwind CSS
- Backend: Node.js, Express.js, RESTful APIs, GraphQL, Python
- Database & Tools: MySQL, MongoDB, AWS S3, Docker, Git & GitHub

Experience:
1. Full Stack Developer at Vitel Global Communication LLC (Feb 2022 - Present)
   - Led the transformation of applications into AI-driven solutions.
   - Integrated AI chatbots into an omni-channel platform, boosting user engagement by over 40%.
   - Reduced customer service response times by 50% with a conversational AI system.
   - Engineered an AI-enhanced video conferencing tool with real-time ML processing.
   - Automated 60% of routine interactions with smart automation systems.

2. Software Developer at ATTPL Group, Ahmedabad, Gujarat, India (Dec 2022 - Sep 2024)
   - Developed and maintained web applications, focusing on robust backend services and interactive frontend experiences.
   - Contributed to building a scalable e-commerce platform.
   - Implemented new features for a client's CRM system.

Projects:
- Omni-Channel Communication Platform: An advanced communication hub with an integrated AI chatbot.
- AI-Enhanced Video Conferencing: A solution with ML features like background blur and automated transcription.
- Intelligent Election Management: A system with predictive analytics for election processes.
- Calendit.ai Scheduling Platform: An NLP-powered platform for booking meetings using natural language.
`;

const prompt = ai.definePrompt({
  name: 'continueConversationPrompt',
  input: {schema: ContinueConversationInputSchema},
  output: {schema: ContinueConversationOutputSchema},
  system: `You are a professional, friendly, and helpful AI assistant for Kandula Naveen's portfolio. 
Your goal is to answer questions about Naveen based on the professional profile provided below. 
Keep your responses concise, accurate, and conversational.
If a question is outside the scope of the provided information, politely state that you can only answer questions about Naveen's professional background.

Here is Naveen's professional profile:
${professionalProfile}
`,
  prompt: `Continue the conversation.

{{#if history}}
Conversation History:
{{#each history}}
  {{#ifEquals role 'user'}}
    User: {{{content.[0].text}}}
  {{/ifEquals}}
  {{#ifEquals role 'model'}}
    Naveen's Assistant: {{{content.[0].text}}}
  {{/ifEquals}}
{{/each}}
{{/if}}

New user message: {{{message}}}
`,
});

const continueConversationFlow = ai.defineFlow(
  {
    name: 'continueConversationFlow',
    inputSchema: ContinueConversationInputSchema,
    outputSchema: ContinueConversationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
