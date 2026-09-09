import { Request, Response } from "express";
import { PDFParse } from "pdf-parse";
import { aiGenerateInterviewReport } from "../services/ai.service";
import { interviewReportModel } from "../models/interviewReport.model";

export async function generateInterviewReport(req: Request, res: Response) {

    if (!req.file) {
        return res.status(400).json({ error: "Resume file is required" });
    }

    const resumeFile = req.file

    const parser = new PDFParse(Uint8Array.from(resumeFile.buffer));
    const resumeContent = await parser.getText();

    const { selfDescription, jobDescription } = req.body

    const interviewReportByAi = await aiGenerateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user: req.userId,
        resumeText: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    res.status(201).json({
        message : "Interview report generated successfully" ,
        interviewReport 
    })
}