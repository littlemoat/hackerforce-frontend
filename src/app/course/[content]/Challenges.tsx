import { successAlert } from "@/components/ToastGroup";
import { useState } from "react";

const Challenges = () => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorIndices, setErrorIndices] = useState<number[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]); // Tracks correct answers

  const handleInputChange = (index: number, value: string) => {
    if (correctIndices.includes(index)) return; // Prevent modification if correct
    const updatedInputs = [...inputValues];
    updatedInputs[index] = value;
    setInputValues(updatedInputs);
  };

  const handleSubmit = (index: number, correctAnswer: string) => {
    const userAnswer = inputValues[index]?.trim().toLowerCase();
    const correct = correctAnswer.trim().toLowerCase();

    if (userAnswer !== correct) {
      setErrorIndices((prev) => [...prev, index]);

      // Remove error state after animation
      setTimeout(() => {
        setErrorIndices((prev) => prev.filter((i) => i !== index));
      }, 1200);
    } else {
      successAlert("Success!");
      setCorrectIndices((prev) => [...prev, index]); // Mark as correct
      setTimeout(() => {
        setCorrectIndices((prev) => prev.filter((i) => i !== index));
      }, 1200);
    }
  };

  const ChallengesData = [
    {
      content: "Solve these challenges",
      questions: [
        { question: "What is 2 + 2?", answer: "4", reward: "+1 XP" },
        {
          question: "What is the capital of France?",
          answer: "paris",
          reward: "+1 XP",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-xl font-bold font-['Orbitron']">
        Challenges
      </h2>

      {ChallengesData.map((challenge, challengeIndex) => (
        <div key={challengeIndex}>
          <p className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
            {challenge.content}
          </p>
          <div className="flex flex-col gap-4 py-2">
            {challenge.questions.map((q, questionIndex) => {
              const inputIndex = challengeIndex * 100 + questionIndex; // Unique index for tracking errors
              return (
                <div className="w-full flex flex-col gap-2" key={inputIndex}>
                  <div className="w-full flex items-end justify-between gap-3">
                    <div className="w-full flex flex-col gap-2">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
                          {q.question}
                        </p>
                        <span className="text-[#d44244] text-sm font-bold font-inconsolata">
                          {q.reward}
                        </span>
                      </div>

                      {/* Input Box */}
                      <div
                        className={`w-full px-3 py-2 bg-[#141616] rounded-lg border ${
                          errorIndices.includes(inputIndex)
                            ? "border-red-500 animate-flash"
                            : correctIndices.includes(inputIndex)
                            ? "animate-success"
                            : "border-[#2f3132]"
                        } flex justify-start items-center gap-2.5`}
                      >
                        <input
                          type="text"
                          value={inputValues[inputIndex] || ""}
                          onChange={(e) =>
                            handleInputChange(inputIndex, e.target.value)
                          }
                          readOnly={correctIndices.includes(inputIndex)} // Prevent editing after correct answer
                          className={`w-full bg-transparent outline-none text-sm font-semibold font-['Inconsolata'] ${
                            correctIndices.includes(inputIndex)
                              ? "text-green"
                              : "text-white"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div
                      className="text-white text-sm font-orbitron px-6 py-2 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg flex items-center gap-1"
                      onClick={() => handleSubmit(inputIndex, q.answer)}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
