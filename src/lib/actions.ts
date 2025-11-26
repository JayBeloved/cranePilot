"use server";

import { z } from "zod";

const emailSchema = z.string().email({ message: "Please enter a valid email." });

export type FormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function subscribeToNewsletter(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email");

  const parsed = emailSchema.safeParse(email);

  if (!parsed.success) {
    return {
      message: parsed.error.errors[0].message,
      status: "error",
    };
  }

  try {
    // Here you would typically add the email to your database (e.g., Firestore)
    console.log(`Subscribing email: ${parsed.data}`);
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: "Welcome to CRANE! Check your inbox.",
      status: "success",
    };
  } catch (e) {
    console.error(e);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}
