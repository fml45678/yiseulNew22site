import React from "react";
import "./You.css";
import { database } from "../firebase";
import { set, ref } from "firebase/database";
import { useState, useRef } from "react";
import { uid } from "uid";
import emailjs from "@emailjs/browser";

function You() {
  // this is to send emails to info@yiseullemieux.com whenever someone submits something to the database
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_y91c4yb",
        "template_5rmf4zq",
        form.current,
        "boz7ZGcVDPwzqnoM6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // preparing the textarea, asking for feedback to be sent to the firebase realtime database

  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const submitFeedback = () => {
    const uuid = uid();
    set(ref(database, `/${uuid}`), {
      feedback,
    });
    sendEmail();
    setFeedback("");
  };

  // preparing the input asking for and email to be sent to the firebase realtime database

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = () => {
    const uuid = uid();
    set(ref(database, `/${uuid}`), {
      email,
    });
    sendEmail();
    setEmail("");
  };

  return (
    <div className="you__container">
      <div className="you__promise">
        Pinky Promise! <br /> Your information will be safe :)
      </div>
      <div className="you__feedbackCircle">
        <p className="you__question">
          What would you like to <br /> Experience Made, squeezed, <br />{" "}
          stirred, and packaged by <br /> Yiseul LeMieux?
        </p>
        <form id="FORM" ref={form}>
          <textarea
            type="text"
            name="text_box"
            onChange={handleFeedbackChange}
            id="youFeedback"
            value={feedback}
            className="you__feedbackCircle__textarea"
          ></textarea>
        </form>
        <div
          onClick={submitFeedback}
          className="feedbackCircle__submitButton"
          value="send"
        ></div>
        <span
          value="send"
          onClick={submitFeedback}
          className="you__feedbackCircleText"
        >
          Submit
        </span>
      </div>

      <div className="you__socialLinksContainer">
        <div className="you__socialLinks">
          <span className="you_socialLinkText">Instagram</span>
        </div>
        <div id="link2" className="you__socialLinks">
          <span className="you_socialLinkText">Strawberry University</span>
        </div>
        <div id="link3" className="you__socialLinks">
          <span className="you_socialLinkText">Creature Stickers</span>
        </div>
      </div>

      <div id="youCirlceTwo" className="you__feedbackCircle">
        <p className="you__question">
          If you would like <br /> to know about the <br /> Next adventure{" "}
          <br /> By Yiseul
          <br /> LeMieux?
        </p>
        <form
        // id="FORM" ref={form}
        >
          <input
            placeholder="email"
            onChange={handleEmailChange}
            name="user_name"
            value={email}
            type="email"
            id="youFeedback"
            className="you__feedbackCircle__input"
          ></input>
        </form>
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
