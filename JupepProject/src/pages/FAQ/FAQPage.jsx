import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "../../data/FAQuestions";

const FAQPage = () => {
  const [answerQuestion, setAnswerQuestion] = useState(
    questions.map((question) => ({ ...question, toggle: false }))
  );

  const handleToggle = (id) => {
    setAnswerQuestion((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, toggle: !question.toggle }
          : question
      )
    );
  };

  return (
    <main className="w-full h-full mt-[120px] text-gray-950 font-medium capitalize mb-[70px]">
      <div className="w-full h-full md:flex md:justify-evenly px-4 md:px-6 lg:px-8 ">
        <div className="md:mt-[22px]">
          <h1 className="md:text-[35px] font-bold">Frequently Ask Questions</h1>
          <a href="http://" className="text-[16px] font-medium text-[#f7b704] ">
            Ask questions on official whatsapp Channel
          </a>
        </div>

        <article>
          {answerQuestion.map((question) => {
            const { id, title, info } = question;
            return (
              <div
                key={id}
                className="text-[15px] border-b-[2px] border-blue-950 md:w-[400px] lg:w-[600px] text-gray-800 leading-snug"
              >
                <header className=" h-[80px]   flex justify-between items-center text-gray-950">
                  <h1 className="font-semibold text-[16px] w-11/12 md:text-[19px]">
                    {title}
                  </h1>
                  <button
                    className="text-gray-700"
                    onClick={() => handleToggle(id)}
                  >
                    {question.toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </header>
                {question.toggle && <p>{info}</p>}
              </div>
            );
          })}
        </article>
      </div>
    </main>
  );
};

export default FAQPage;
