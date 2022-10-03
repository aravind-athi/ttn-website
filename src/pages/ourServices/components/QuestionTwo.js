import React from 'react'

const QuestionTwo = ({options,setResponse,setCurrent}) => {

    const optionClickHandler = (e, pos) => {
        setResponse((prev) => {
          prev[pos] = e.target.getAttribute("value");
          return prev;
        });
        setCurrent(3)
      };
  return (
    <div className="service_list_box">
            <div className="service_list_identifier_question">
              Which domain are you inclined towards ?
            </div>
            {options.map((opt, i) => (
              <div
                className="service_list_identifier_answer"
                key={opt.value}
                value={opt.value}
                onClick={(e) => optionClickHandler(e, 1)}
              >
                {opt.label}
              </div>
            ))}
          </div>
  )
}

export default QuestionTwo