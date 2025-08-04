'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendMessage } from '@/lib/actions';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Send, User } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const initialState = {
  response: null,
  error: null,
  history: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ChatbotPreview() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.response || state.error) {
      formRef.current?.reset();
    }
  }, [state.response, state.error]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [state.history]);


  return (
    <Card className="bg-card/50 backdrop-blur-sm flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">AI Chatbot</CardTitle>
        <CardDescription>
          Ask me anything about my professional background.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <ScrollArea className="flex-grow h-64 rounded-md border border-border bg-background p-4 mb-4" ref={scrollAreaRef}>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-xs">
                <p className="text-sm">
                  Hello! I'm Naveen's AI assistant. Feel free to ask me about his skills, experience, or projects. How can I help you?
                </p>
              </div>
            </div>

            {state.history?.map((entry: any, index: number) => (
                <div key={index} className={`flex items-start gap-3 ${entry.role === 'user' ? 'self-end' : ''}`}>
                    {entry.role === 'model' && (
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <Bot className="h-5 w-5 text-primary" />
                        </div>
                    )}
                     <div className={`p-3 rounded-lg max-w-xs ${entry.role === 'user' ? 'bg-primary text-primary-foreground order-1' : 'bg-muted'}`}>
                        <p className="text-sm">{entry.content[0].text}</p>
                    </div>
                    {entry.role === 'user' && (
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center order-2">
                            <User className="h-5 w-5" />
                        </div>
                    )}
                </div>
            ))}

          </div>
        </ScrollArea>
        <form ref={formRef} action={formAction} className="space-y-4">
          <input type="hidden" name="history" value={JSON.stringify(state.history)} />
          <div>
            <Input name="message" placeholder="e.g., 'Tell me about your projects.'" required />
            {state.error && <p className="text-destructive text-sm mt-2">{state.error}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
