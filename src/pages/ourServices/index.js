import React, { useState } from "react";
import PageWrapper from "../../wrappers/PageWrapper";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import ServiceList from "./components/ServiceList";
import "./Ourservices.css";
let company_question_options = [
  { label: "Entreuprenur with an idea", value: 1 },
  { label: "A new startup", value: 2 },
  { label: "IN initial phase of startup", value: 3 },
  { label: "Established startup", value: 4 },
  { label: "None of the above", value: 5 },
];

let domain_question_options = [
  { label: "Manufacturing", value: 1 },
  { label: "IT Services", value: 2 },
  { label: "E-commerce", value: 3 },
  { label: "Logistics", value: 4 },
  { label: "Ed-Tech", value: 5 },
  { label: "Agri-Tech", value: 6 },
  { label: "Consulting", value: 7 },
  { label: "None of the above", value: 8 },
];

const OurServices = () => {
  let [response, setResponse] = useState([0, 0]);
  let [current, setCurrent] = useState(1);

  return (
    <PageWrapper>
      <div className="our_services_container">
        <div className="our_products_body_title">Lets Work Together</div>
        <div className="our_services_statement">
          We did not have what you looked for ? <br />
          <br /> Lets see whether our nation can offer what you need.
        </div>
        {current === 1 && (
          <QuestionOne
            options={company_question_options}
            {...{ setCurrent, setResponse }}
          />
        )}
        {current === 2 && (
          <QuestionTwo
            options={domain_question_options}
            {...{ setCurrent, setResponse }}
          />
        )}
        {current === 3 && (
          <ServiceList
            {...{ setCurrent, setResponse }}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default OurServices;
