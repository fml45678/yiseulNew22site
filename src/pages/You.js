import React from "react";
import "./You.css";
import { database } from "../firebase";
import { set, ref } from "firebase/database";
import { useState } from "react";
import { uid } from "uid";

function You() {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    const uuid = uid();
    set(ref(database, `/${uuid}`), {
      feedback,
    });
    setFeedback("");
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = () => {
    const uuid = uid();
    set(ref(database, `/${uuid}`), {
      email,
    });
    setEmail("");
  };

  return (
    <div className="you__container">
      <div className="you__promise">
        Pinky Promise! <br /> Your information will be safe :)
      </div>
      <div className="you__feedbackCircle">
        <p className="you__question">
          What would you like to Experience Made, squeezed, stirred, and
          packaged by Yiseul LeMieux?
        </p>
        <textarea
          name=""
          onChange={handleFeedbackChange}
          id="youFeedback"
          value={feedback}
          className="you__feedbackCircle__textarea"
        ></textarea>
        <div
          onClick={submitFeedback}
          className="feedbackCircle__submitButton"
        ></div>
        <span onClick={submitFeedback} className="you__feedbackCircleText">
          Submit
        </span>
      </div>

      <div className="you__socialLinks">
        <span className="you_socialLinkText">Instagram</span>
      </div>
      <div id="link2" className="you__socialLinks">
        <span className="you_socialLinkText">Strawberry University</span>
      </div>
      <div id="link3" className="you__socialLinks">
        <span className="you_socialLinkText">Creature Stickers</span>
      </div>

      <div id="youCirlceTwo" className="you__feedbackCircle">
        <p className="you__question">
          If you would like to know about the Next adventure <br /> By Yiseul
          LeMieux?
        </p>
        <input
          placeholder="email"
          onChange={handleEmailChange}
          name=""
          value={email}
          type="email"
          id="youFeedback"
          className="you__feedbackCircle__input"
        ></input>
        <div
          onClick={submitEmail}
          className="feedbackCircle__submitButton"
        ></div>
        <span onClick={submitEmail} className="you__feedbackCircleText">
          Submit
        </span>
      </div>
    </div>
  );
}

export default You;
