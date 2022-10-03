import React from "react";
import PageWrapper from "../../wrappers/PageWrapper";
import "./Contact.css";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="contact_container">
        <div className="contact_left">
          <div style={{fontSize : "4vw"}}>Get To Know Us</div>
          <img src="assets/contact.jpg" />
        </div>
        <div className="contact_right">
        <div className="contact_header">SHOOT IT !</div>
          <div className="input_box" style={{ width: "100%" }} >
            {/* <label htmlFor="name">Name</label> */}
            <input type="text" name="name" placeholder="Name Please"/>
          </div>
          <div className="input_box" style={{ width: "55%" }}>
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" name="email" placeholder="Email"/>
          </div>
          <div className="input_box" style={{ width: "35%" }}>
            {/* <label htmlFor="phone">Phone</label> */}
            <input type="tel" name="phone" placeholder="Phone"/>
          </div>
          <div className="input_box" style={{ width: "100%" }}>
            {/* <label htmlFor="service_type">Service Type</label> */}
            <input type="text" name="service_Type" placeholder="Your Requirement Type"/>
          </div>
          <div className="input_box" style={{ width: "100%" }}>
            {/* <label htmlFor="query">Your Query</label> */}
            <textarea name="query" placeholder="Your Queries"/>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
