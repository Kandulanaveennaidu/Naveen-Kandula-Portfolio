'use server';

import { generateInitialMessage } from "@/ai/flows/generate-initial-message";
import { z } from "zod";

const inputSchema = z.object({
  topic: z.string().min(3, "Topic must be at least 3 characters long."),
});

type FormState = {
  message: string | null;
  error: string | null;
};

export async function getInitialMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const parsed = inputSchema.safeParse({
    topic: formData.get("topic"),
  });

  if (!parsed.success) {
    return {
      message: null,
      error: parsed.error.flatten().fieldErrors.topic?.[0] || "Invalid input.",
    };
  }

  try {
    const result = await generateInitialMessage({ topic: parsed.data.topic });
    return { message: result.message, error: null };
  } catch (e) {
    console.error(e);
    return {
      message: null,
      error: "Failed to generate message. Please try again.",
    };
  }
}
