import React from "react";
import "./Bio.css";
import { useState } from "react";

const Bio = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="cvContainer__container">
      <div
        onClick={() => {
          setShowComponent(true);
        }}
        className="iIt__bio"
      >
        <span className="iIt__circleText">BIO</span>
      </div>

      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="cvContainer__container"
        >
          <div className="bio__container">
            <p className="bio__text">
              Yiseul LeMieux is a Korean-born artist living in New York City.
              Her work transcends disciplinary boundaries, often bringing
              together components in numerous media to create vivid narratives
              and alternative realities. She collaborates frequently with her
              partner Masson LeMieux, as well as with other artists, and her
              work often has a special focus on direct audience engagement and
              community feedback. LeMieux's disinterest with conventional
              boundaries between various media, between the artist and the
              viewer/listener, and the creative and receptive process are a part
              of her larger creative vision. She locates herself within a global
              network of entities - a world of unconventional interchangeability
              and a rejection of assigned values. The artist is interchangeable
              with another human, an animal, a vegetable, and/or a mug, et
              cetera. This ethos of interchangeability allows her to explore the
              infinite potential both of herself and of the entire world around
              her.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bio;
