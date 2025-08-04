'use server';

import { continueConversation } from "@/ai/flows/continue-conversation";
import { z } from "zod";

const inputSchema = z.object({
  message: z.string().min(1, "Message cannot be empty."),
  history: z.string().optional(),
});

type FormState = {
  response: string | null;
  error: string | null;
  history: any[] | null;
};

export async function sendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const parsed = inputSchema.safeParse({
    message: formData.get("message"),
    history: formData.get("history"),
  });

  if (!parsed.success) {
    return {
      response: null,
      error: parsed.error.flatten().fieldErrors.message?.[0] || "Invalid input.",
      history: prevState.history,
    };
  }
  
  const history = prevState.history || [];

  try {
    const result = await continueConversation({ 
      message: parsed.data.message,
      history,
     });

    const newHistory = [
        ...history,
        { role: 'user', content: [{text: parsed.data.message }] },
        { role: 'model', content: [{text: result.response }] },
    ];

    return { 
        response: result.response, 
        error: null,
        history: newHistory,
    };
  } catch (e) {
    console.error(e);
    return {
      response: null,
      error: "Failed to get response. Please try again.",
      history: prevState.history,
    };
  }
}
