import React from "react";
import "./VideoModal.css";
import { useState } from "react";

const VideoModal = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <div
        className="description__text"
        onClick={() => {
          setShowComponent(true);
        }}
      >
        Description
      </div>
      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="videoDescriptionModal"
        >
          <p>
            Hundred percent organic Made, Squeezed, packaged By Yiseul LeMieux
          </p>
        </div>
      )}
    </>
  );
};

export default VideoModal;
