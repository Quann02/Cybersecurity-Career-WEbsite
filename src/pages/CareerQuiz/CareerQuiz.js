import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CareerQuiz.css";

const questions = [
  {
    id: "q1",
    question: "How would you rate your techincal ability to code and identify bugs or issues within software? ",
    options: ["I have no experience – I’ve never coded or worked with debugging/troubleshooting.",
      "Beginner – I have some basic knowledge but struggle with complex issues.",
      "Intermediate – I have a coding foundation. I can identify bugs and troubleshoot common issues with guidance or resources.",
      "Advanced – I’m confident in my coding, debugging, and troubleshooting skills and can solve most technical challenges independently."],
  },
  {
    id: "q2",
    question: "How comfortable are you performing under high-pressure or time-sensitive situations?",
    options: ["Very Comfortable",
      "Somewhat Comfortable",
      "Prefer low-pressure environments"],
  },
  {
    id: "q3",
    question: "When working on an academic group project, which role are you more inclined to take?",
    options: ["Coder or technical problem solver",
      "Creative thinker who identifies potential weaknesses or pain points in the project plan",
      "Planner who ensures the project runs smoothly and is well-protected",
      "Detail-oriented investigator/researcher who digs into data or facts.",
      "Organizer who ensures the the project meets the guidelines and specifications.",
      "Communicator who presents findings and ensures clarity."]
  },
  {
    id: "q4",
    question: "Which academic strength do you resonate with the most?",
    options: ["Writing clean, efficient code for assignments.",
      "Solving puzzles or finding creative ways to overcome challenges.",
      "Staying vigilant and noticing small errors in systems.",
      "Paying close attention to details and patterns.",
      "Organizing research and staying up to date on regulations",
      "Breaking down complex problems into easy-to-understand solutions"]
  },
  {
    id: "q5",
    question: "Would you prefer a career heavily based on techincal abilities OR soft skills and analyzation abilities?",
    options: ["I would prefer a career that requires strong techincal abilities",
      "I would prefer a career that focuses on my soft skills and analyzation abilities", "I would prefer a combination of both"]
  },
  {
    id: "q6",
    question: "Do you prefer individual-based work or group-based work?",
    options: ["I prefer individual-based work",
      "I prefer group-based work"]
  },
  {
    id: "q7",
    question: "Would you be interested in mastering new risk frameworks or techincal tools independently?",
    options: ["Yes - I would be interested in mastering new risk frameworks or techincal tools.",
      "No - I would not be interested in mastering new risk frameworks or techincal tools."]
    },
    {
    id: "q8",
    question: "Which of the following career tasks aligns with what you would like to do on a day to day basis?",
    options: ["Writing and debugging code for secure applications.",
      "Simulating real-world attacks to find system vulnerabilities.",
      "Monitoring systems and responding to potential breaches.",
      "Analyzing security incidents and preparing reports for leadership.",
      "Examining devices for evidence in cybercrime investigations.",
      "Ensuring the organization’s security policies align with regulations."]
  },

 ];
 

const careerScores = {
  redTeam: 0,
  blueTeam: 0,
  softwareEngineer: 0,
  informationSecurityAnalyst: 0,
  grc: 0,
  digitalForensics: 0,
};

export function CareerMatchQuiz() {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [error, setError] = useState("");
  const [showInstructions, setShowInstructions] = useState(true);
  const navigate = useNavigate();

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const calculateScores = (answers) => {
    // Reset scores for all careers
    Object.keys(careerScores).forEach((career) => (careerScores[career] = 0));
  
    for (const [key, value] of Object.entries(answers)) {
      switch (key) {
        case "q1":
          // "How would you rate your technical ability to code and identify bugs or issues within software?"
          if (value === "I have no experience – I’ve never coded or worked with debugging/troubleshooting.") {
            careerScores.grc += 1;
          } else if (value === "Beginner – I have some basic knowledge but struggle with complex issues.") {
            careerScores.informationSecurityAnalyst += 1;
            careerScores.digitalForensics += 1;
          } else if (value === "Intermediate – I have a coding foundation...") {
            careerScores.blueTeam += 1;
          } else if (value === "Advanced – I’m confident in my coding, debugging, and troubleshooting skills...") {
            careerScores.softwareEngineer += 3;
            careerScores.redTeam += 1;
          }
          break;
  
        case "q2":
          // "How comfortable are you performing under high-pressure or time-sensitive situations?"
          if (value === "Very Comfortable") {
            careerScores.redTeam += 1;
            careerScores.blueTeam += 3;
            careerScores.digitalForensics += 1;
          } else if (value === "Somewhat Comfortable") {
            careerScores.informationSecurityAnalyst += 1;
            careerScores.softwareEngineer += 1
          } else if (value === "Prefer low-pressure environments") {
            careerScores.grc += 1;
  
          }
          break;
  
        case "q3":
          // "When working on a group project, which role are you more inclined to take?"
          if (value === "Coder or technical problem solver") {
            careerScores.softwareEngineer += 3;
          } else if (value === "Creative thinker who identifies potential weaknesses or pain points in the project plan") {
            careerScores.redTeam += 3;
          } else if (value === "Planner who ensures the project runs smoothly and is well-protected") {
            careerScores.grc += 3;
          } else if (value === "Detail-oriented investigator/researcher who digs into data or facts.") {
            careerScores.digitalForensics += 3;
          } else if (value === "Organizer who ensures the project meets the guidelines and specifications.") {
            careerScores.grc += 3;
          } else if (value === "Communicator who presents findings and ensures clarity.") {
            careerScores.informationSecurityAnalyst += 3;
          }
          break;
  
        case "q4":
          // "Which academic strength do you resonate with the most?"
          if (value === "Writing clean, efficient code for assignments.") {
            careerScores.softwareEngineer += 3;
          } else if (value === "Solving puzzles or finding creative ways to overcome challenges.") {
            careerScores.redTeam += 3;
          } else if (value === "Staying vigilant and noticing small errors in systems.") {
            careerScores.blueTeam += 3;
            careerScores.digitalForensics += 1;
          } else if (value === "Paying close attention to details and patterns.") {
            careerScores.digitalForensics += 3;
          } else if (value === "Organizing research and staying up to date on regulations") {
            careerScores.grc += 3;
          } else if (value === "Breaking down complex problems into easy-to-understand solutions") {
            careerScores.informationSecurityAnalyst += 3;
          }
          break;
  
        case "q5":
          // "Would you prefer a career heavily based on technical abilities OR soft skills and analyzation abilities?"
          if (value === "I would prefer a career that requires strong technical abilities") {
            careerScores.softwareEngineer += 3;
            careerScores.redTeam += 3;
          } else if (value === "I would prefer a career that focuses on my soft skills and analyzation abilities") {
            careerScores.grc += 3;
            careerScores.informationSecurityAnalyst += 3;
          } else if (value === "I would prefer a combination of both"){
            careerScores.digitalForensics += 3 
            careerScores.blueTeam += 3
          }
          break;
  
        case "q6":
          // "Do you prefer individual-based work or group-based work?"
          if (value === "I prefer individual-based work") {
            careerScores.softwareEngineer += 3;
            careerScores.redTeam += 3;
          } else if (value === "I prefer group-based work") {
            careerScores.grc += 3;
            careerScores.blueTeam += 3;
          }
          break;
  
        case "q7":
          // "Would you be interested in mastering new frameworks or technical tools independently?"
          if (value === "Yes - I would be interested in mastering new risk frameworks or technical tools.") {
            careerScores.softwareEngineer += 2;
            careerScores.digitalForensics += 2;
            careerScores.grc += 2;


          } else if (value === "No - I would not be interested in mastering new risk frameworks or technical tools.") {
           
            careerScores.informationSecurityAnalyst += 2;
            careerScores.blueTeam += 2;
          }
          break;
  
        case "q8":
          // "Which of the following career tasks aligns with what you would like to do on a day-to-day basis?"
          if (value === "Writing and debugging code for secure applications.") {
            careerScores.softwareEngineer += 5;
          } else if (value === "Simulating real-world attacks to find system vulnerabilities.") {
            careerScores.redTeam += 5;
          } else if (value === "Monitoring systems and responding to potential breaches.") {
            careerScores.blueTeam += 5;
          } else if (value === "Analyzing security incidents and preparing reports for leadership.") {
            careerScores.informationSecurityAnalyst += 5;
          } else if (value === "Examining devices for evidence in cybercrime investigations.") {
            careerScores.digitalForensics += 5;
          } else if (value === "Ensuring the organization’s security policies align with regulations.") {
            careerScores.grc += 5;
          }
          break;
  
        default:
          break;
      }
    }
  };
  

  const handleNext = () => {
    if (answers[questions[currentQuestionIndex].id]) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setError(""); // Clear error message
    } else {
      setError("Please answer the current question.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the current question is answered
    if (!answers[questions[currentQuestionIndex].id]) {

      return; // Stop further execution if the question is not answered
    }

    // Clear error if the question is answered
    setError("");

    // Proceed with the calculation of scores
    calculateScores(answers);

    // Find the career with the highest score
    const highestCareer = Object.entries(careerScores).reduce(
      (max, [career, score]) => (score > max.score ? { career, score } : max),
      { career: "", score: 0 }
    ).career;

    // Redirect to the highest scoring career page
    navigate(`/career/${highestCareer}`);
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const handleStartQuiz = () => {
    setShowInstructions(false);
  };

  return (
    <main className="form-body">
      {showInstructions ? (
        <div className="instructions-container">
  <div className="quiz-header">
    <h1>Quiz Instructions</h1>
    <p>This student-geared quiz is designed to help match you to a cybersecurity career based on your skills, interests, and academic experience.</p>
  </div>

  <div className="instructions-content">
    <p>1. Log in if you would like to save your career result.</p>
    <p>2. Start the quiz and answer all 8 quiz questions to the best of your ability.</p>
    <p>3. After completion, you will be matched with one of six career areas: Red Team, Blue Team, Security/Software Engineer, Information Security Analyst, GRC, and Digital Forensics.</p>
    <p>4. Each matched career page will allow you to explore career specifics as well as recommended resources within the Seattle area.</p>
  </div>

  <button onClick={handleStartQuiz}>Start Quiz</button>
</div>

        
      ) : (
        <div className="form-container">
          <form id="careerMatchQuiz" onSubmit={handleSubmit}>
            <div className="question">
              <h2>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h2>
              <div className="choices">
                {questions[currentQuestionIndex].options.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={questions[currentQuestionIndex].id}
                      value={option}
                      onChange={handleAnswerChange}
                      checked={answers[questions[currentQuestionIndex].id] === option}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="button-container">
              {currentQuestionIndex < questions.length - 1 ? (
                <button type="button" onClick={handleNext}>Next</button>
              ) : (
                <>
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleRetakeQuiz}>Retake Quiz</button>
                </>
              )}
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
    </main>
  );
}

export default CareerMatchQuiz;
