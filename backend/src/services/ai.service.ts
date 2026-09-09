import { GoogleGenAI } from "@google/genai"
import { interviewReportSchemaZod } from "../zod.schema/interviewReport.schema"


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

export async function generateInterviewReport({ resume, selfDescription, jobDescription }: { resume: string; selfDescription: string; jobDescription: string }) {

    const prompt = `Generate an interview report for a candidate based on the following information:
                        Resume: ${resume}
                        Self Description:${selfDescription}
                        Job Description:${jobDescription}
`

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: interviewReportSchemaZod.toJSONSchema(),
        }
    })
    if (!response.text) {
        throw new Error("The AI response did not contain text")
    }

    return JSON.stringify(JSON.parse(response.text), null, 2)   
}