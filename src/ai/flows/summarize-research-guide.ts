'use server';

/**
 * @fileOverview A research guide summarization AI agent.
 *
 * - summarizeResearchGuide - A function that handles the summarization process.
 * - SummarizeResearchGuideInput - The input type for the summarizeResearchGuide function.
 * - SummarizeResearchGuideOutput - The return type for the summarizeResearchGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResearchGuideInputSchema = z.object({
  guideContent: z.string().describe('The full content of the research guide.'),
});
export type SummarizeResearchGuideInput = z.infer<typeof SummarizeResearchGuideInputSchema>;

const SummarizeResearchGuideOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the research guide.'),
});
export type SummarizeResearchGuideOutput = z.infer<typeof SummarizeResearchGuideOutputSchema>;

export async function summarizeResearchGuide(input: SummarizeResearchGuideInput): Promise<SummarizeResearchGuideOutput> {
  return summarizeResearchGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResearchGuidePrompt',
  input: {schema: SummarizeResearchGuideInputSchema},
  output: {schema: SummarizeResearchGuideOutputSchema},
  prompt: `Summarize the following research guide content. Provide a concise summary that captures the key points and takeaways.\n\nContent:\n{{{guideContent}}}`,
});

const summarizeResearchGuideFlow = ai.defineFlow(
  {
    name: 'summarizeResearchGuideFlow',
    inputSchema: SummarizeResearchGuideInputSchema,
    outputSchema: SummarizeResearchGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
