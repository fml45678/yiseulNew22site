import React from "react";

const Bio = ({ onClick, showComponent }) => {
  return (
    <div>
      <div onClick={() => onClick(!showComponent)} className="iIt__bio">
        <span className="iIt__circleText">BIO</span>
      </div>
      {showComponent && (
        <div onClick={() => onClick(!showComponent)} className="bio__container">
          {/* <span className="bio__xButton">X</span> */}
          <svg
            className="bio__x"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
          >
            <g
              id="Group_254"
              data-name="Group 254"
              transform="translate(-1314 -305.724)"
            >
              <circle
                id="Ellipse_618"
                data-name="Ellipse 618"
                cx="22.5"
                cy="22.5"
                r="22.5"
                transform="translate(1314 305.724)"
                fill="#e35d36"
              />
              <g
                id="Group_252"
                data-name="Group 252"
                transform="translate(1322.601 314.601)"
              >
                <line
                  id="Line_7"
                  data-name="Line 7"
                  x2="27"
                  y2="27"
                  transform="translate(0.398 0.124)"
                  fill="none"
                  stroke="#faf2f2"
                  strokeWidth="3"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  x1="27"
                  y2="27"
                  transform="translate(0.398 0.124)"
                  fill="none"
                  stroke="#faf2f2"
                  strokeWidth="3"
                />
              </g>
            </g>
          </svg>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="yiseulSponge"
            src="/Sponge/yiseulSponge.mp4"
            alt="yiseul's theme song video"
          />
          <div className="bio__text">
            Yiseul LeMieux is a Korean-born artist living in New York City. Her
            work transcends disciplinary boundaries, often bringing together
            components in numerous media to create vivid narratives and
            alternative realities. She collaborates frequently with her partner
            Masson LeMieux, as well as with other artists, and her work often
            has a special focus on direct audience engagement and community
            feedback. LeMieux's disinterest with conventional boundaries between
            various media, between the artist and the viewer/listener, and the
            creative and receptive process are a part of her larger creative
            vision. She locates herself within a global network of entities - a
            world of unconventional interchangeability and a rejection of
            assigned values. The artist is interchangeable with another human,
            an animal, a vegetable, and/or a mug, et cetera. This ethos of
            interchangeability allows her to explore the infinite potential both
            of herself and of the entire world around her.
          </div>
        </div>
      )}
    </div>
  );
};

export default Bio;
