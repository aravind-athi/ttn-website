import React from "react";

const QuestionOne = ({ options, setResponse, setCurrent }) => {
  const optionClickHandler = (e, pos) => {
    setResponse((prev) => {
      prev[pos] = e.target.getAttribute("value");
      return prev;
    });
    setCurrent(2);
  };
  return (
    <div className="service_list_box">
      <div className="service_list_identifier_question">
        Which among the following suits you ?
      </div>
      {options.map((opt, i) => (
        <div
          className="service_list_identifier_answer"
          key={opt.value}
          value={opt.value}
          onClick={(e) => optionClickHandler(e, 0)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default QuestionOne;
