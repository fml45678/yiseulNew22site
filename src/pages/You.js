import React from "react";
import "./You.css";
function You() {
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
          id="youFeedback"
          className="you__feedbackCircle__textarea"
        ></textarea>
        <div className="feedbackCircle__submitButton"></div>
        <span className="you__feedbackCircleText">Submit</span>
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
          If you would like to know Next adventure <br /> By Yiseul LeMieux?
        </p>
        <input
          placeholder="email"
          name=""
          type="email"
          id="youFeedback"
          className="you__feedbackCircle__input"
        ></input>
        <div className="feedbackCircle__submitButton"></div>
        <span className="you__feedbackCircleText">Submit</span>
      </div>
    </div>
  );
}

export default You;
