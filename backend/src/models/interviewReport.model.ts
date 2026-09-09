import mongoose from "mongoose";

/**
 * - job description schema : String
 * - resume text : String 
 * - Self description : String 
 * 
 * - matchScore : Number 
 * 
 * - technical questions : [{
 *                          question : String ,
 *                          intention : String ,  
 *                          answer : String
 *                          }]
 * - behavioural questions : [{
 *                          question : String ,
 *                          intention : String ,
 *                          answer : String
 *                          }]
 * - skill gaps : [{
 *                 skill : String ,
 *                 severity : {
 *                          type : String ,  
 *                          enum : ["low","medium","high"] 
 *                          }
 *                  }]
 * - preparation plan : [{
 *                      day : Number , 
 *                      focus : String  , 
 *                      tasks : [String]
 *                      }]
 * 
 * 
 */


const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        require: [true, "Technical question is required"]
    },
    intention: {
        type: String,
        require: [true, "Intention is required"]
    },
    answer: {
        type: String,
        require: [true, "Answer is required"]
    }
}, {
    _id: false
})

const behaviouralQuestionSchema = new mongoose.Schema({
        question: {
            type: String,
            require: [true, "Behavioural question is required"]
        },
        intention: {
            type: String,
            require: [true, "Intention is required"]   
        },
        answer: {
            type: String,
            require: [true, "Answer is required"]
        }
    },{
        _id : false
    })

const skillGapSchema = new mongoose.Schema({

        skill: {
            type: String,
            require: true

        },
        severity: {
            type: String,
            enum: ["low", "medium", "high"],
            require: true
        }
    },{
        _id : false 
    })

const preparationPlanSchema = new mongoose.Schema({
        day: {
            type: Number,
            require: [true , "Day is required"]
        },
        focus: {
            type: String,
            require: [true , "Focus is required"]
        },
        tasks: [{
            type: String,
            require: [true , "Task is required"]
        }]
    })

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        require: [true, "Job description is required"]
    },
    resumeText: {
        type: String,
        // require: [true, "Resume text is required"]
    },
    selfDescription: {
        type: String,
        // require: [true, "Self description is required"]
    },
    matchScore: {
        type: Number,
        min: [0, "Match score cannot be less than 0"],
        max: [100, "Match score cannot be greater than 100"],
        require: true
    },
    technicalQuestions: [technicalQuestionSchema],
    behaviouralQuestions: [behaviouralQuestionSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema]
},
    {
        timestamps: true
    })

export const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema) 