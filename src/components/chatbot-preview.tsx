'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getInitialMessage } from '@/lib/actions';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Sparkles, User } from 'lucide-react';

const initialState = {
  message: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : 'Start Conversation'}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ChatbotPreview() {
  const [state, formAction] = useActionState(getInitialMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      formRef.current?.reset();
    }
  }, [state.message]);


  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">AI Chatbot Preview</CardTitle>
        <CardDescription>
          See how my AI could start a conversation. Enter a topic below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 rounded-md border border-border bg-background p-4 flex flex-col gap-4 overflow-y-auto mb-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div className="bg-muted p-3 rounded-lg max-w-xs">
              <p className="text-sm">
                Hello! I'm an AI assistant for Kandula Naveen's portfolio. What topic brings you here today? For example, you could type "AI project collaboration".
              </p>
            </div>
          </div>
          {state.message && (
             <div className="flex items-start gap-3 self-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs order-1">
                <p className="text-sm">{state.message}</p>
              </div>
               <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center order-2">
                <User className="h-5 w-5" />
              </div>
            </div>
          )}
        </div>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div>
            <Input name="topic" placeholder="e.g., 'AI project collaboration'" required />
            {state.error && <p className="text-destructive text-sm mt-2">{state.error}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
