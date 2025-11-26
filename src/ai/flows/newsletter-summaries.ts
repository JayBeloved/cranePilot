'use server';

/**
 * @fileOverview Generates a newsletter summary of the latest research guides and AI prompts.
 *
 * - generateNewsletterSummary - A function that generates the newsletter summary.
 * - NewsletterSummaryOutput - The return type for the generateNewsletterSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NewsletterSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the latest research guides and AI prompts.'),
});
export type NewsletterSummaryOutput = z.infer<typeof NewsletterSummaryOutputSchema>;

export async function generateNewsletterSummary(): Promise<NewsletterSummaryOutput> {
  return newsletterSummaryFlow({});
}

const prompt = ai.definePrompt({
  name: 'newsletterSummaryPrompt',
  output: {schema: NewsletterSummaryOutputSchema},
  prompt: `You are an expert in creating concise and engaging newsletter summaries for CRANE JLA Consults, focusing on research methodologies and AI applications.

  Generate a summary of the latest research guides and AI prompts. Focus on providing value to the newsletter readers by highlighting practical applications and key takeaways.
  The summary should be concise and engaging, encouraging readers to explore the full guides and prompts on the CRANE JLA Consults website.
  
  Format the summary as a short paragraph.
  `,
});

const newsletterSummaryFlow = ai.defineFlow(
  {
    name: 'newsletterSummaryFlow',
    outputSchema: NewsletterSummaryOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);
