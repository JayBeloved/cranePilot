"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { subscribeToNewsletter, type FormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  );
}

export function NewsletterSection() {
  const initialState: FormState = { message: "", status: "idle" };
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="newsletter" className="w-full bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Stay Updated with Research Insights
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            Get monthly guides, prompts, and resources delivered to your inbox.
          </p>
          <form action={formAction} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-grow h-11 text-base"
              />
              <SubmitButton />
            </div>
            <p
              aria-live="polite"
              className={cn("mt-2 text-sm",
                state.status === 'success' ? 'text-primary' : 'text-destructive'
              )}
            >
              {state.status !== 'idle' && state.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
