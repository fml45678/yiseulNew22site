import React, { useEffect } from "react";
import "./Modal1.css";
import { useState } from "react";

const Modal4 = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(true);
      clearInterval(intervalId);
    }, 210000);
  }, []);

  return (
    <>
      {showComponent && (
        <div
          onClick={() => {
            setShowComponent(false);
          }}
          className="modal1Container__container"
        >
          <div className="modal4__svg">
            <svg
              id="Component_22_1"
              data-name="Component 22 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="292"
              height="292"
              viewBox="0 0 292 292"
            >
              <g id="Polygon_70" data-name="Polygon 70" fill="#fff">
                <path
                  d="M 202.3330383300781 284.5 L 89.66695404052734 284.5 C 88.99918365478516 284.5 88.37136077880859 284.2399597167969 87.89923095703125 283.7677612304688 L 8.232227325439453 204.1007690429688 C 7.760045528411865 203.6286315917969 7.5 203.0008239746094 7.5 202.3330383300781 L 7.500045299530029 89.66695404052734 C 7.500045299530029 88.99913787841797 7.760090827941895 88.37131500244141 8.232273101806641 87.89918518066406 L 87.89926910400391 8.232227325439453 C 88.37140655517578 7.760045528411865 88.99922943115234 7.5 89.66699981689453 7.5 L 202.3330383300781 7.500045299530029 C 203.0008697509766 7.500045299530029 203.6286773681641 7.760090827941895 204.1008148193359 8.232273101806641 L 283.7677612304688 87.89923095703125 C 284.2399597167969 88.37136077880859 284.5 88.99918365478516 284.5 89.66695404052734 L 284.5 202.3330841064453 C 284.5 203.0008697509766 284.2399597167969 203.6286773681641 283.7677612304688 204.1008148193359 L 204.1008148193359 283.7677612304688 C 203.6286773681641 284.2399597167969 203.0008697509766 284.5 202.3330383300781 284.5 Z"
                  stroke="none"
                />
                <path
                  d="M 91.73800659179688 15 L 15 91.73794555664062 L 15 200.2620544433594 L 91.73800659179688 277 L 200.2619934082031 277 L 277 200.2619934082031 L 277 91.73800659179688 L 200.2619934082031 15 L 91.73800659179688 15 M 89.66700744628906 0 L 202.3330535888672 0 C 204.9852142333984 0 207.5287475585938 1.0535888671875 209.4041137695312 2.928955078125 L 289.071044921875 82.59590148925781 C 290.9464111328125 84.47126770019531 292 87.01478576660156 292 89.66694641113281 L 292 202.3330535888672 C 292 204.9852142333984 290.9464111328125 207.5287475585938 289.071044921875 209.4041137695312 L 209.4041137695312 289.071044921875 C 207.5287475585938 290.9464111328125 204.9852142333984 292 202.3330535888672 292 L 89.66694641113281 292 C 87.01478576660156 292 84.47126770019531 290.9464111328125 82.59590148925781 289.071044921875 L 2.92889404296875 209.4041137695312 C 1.05352783203125 207.5287475585938 0 204.9852142333984 0 202.3330078125 L 0 89.66694641113281 C 0 87.01478576660156 1.0535888671875 84.47120666503906 2.928955078125 82.59584045410156 L 82.595947265625 2.92889404296875 C 84.4713134765625 1.05352783203125 87.01484680175781 0 89.66700744628906 0 Z"
                  stroke="none"
                  fill="#d7bf4c"
                />
              </g>
              <text
                id="Yes_you_will_be_getting_Many_interesting_messages_While_you_are_spending_time_here."
                data-name="Yes, you will be getting
                    Many interesting messages 
                    While you are spending time here."
                transform="translate(142 248)"
                fill="#16463b"
                stroke="#16463b"
                stroke-width="1"
                font-size="9"
                font-family="C90Degree, C90 Degree"
                letter-spacing="0.1em"
              >
                <tspan x="-48" y="0">
                  Yes, you will be getting
                </tspan>
                <tspan x="-56" y="9">
                  Many interesting messages
                </tspan>
                <tspan x="-67" y="18">
                  While you are spending time here.
                </tspan>
              </text>
              <text
                id="The_most_regretful_thing_In_my_life_Was_sharing._But_I_am_stupid._I_still_share_too_much._If_I_see_there_is_0.0001_percent_Of_chance_that_someone_will_Listen_to_be_considerate_and_be_honest_I_share_and_share._It_is_a_disease._"
                data-name="The most regretful thing 
                In my life 
                Was sharing. 
                But I am stupid. 
                I still share too much. 
                If I see there is 0.0001 percent 
                Of chance that someone will 
                Listen to, be considerate, 
                and be honest, 
                I share and share.
                It is a disease. "
                transform="translate(143 58)"
                fill="#16463b"
                stroke="#16463b"
                stroke-width="1"
                font-size="16"
                font-family="C90Degree, C90 Degree"
                letter-spacing="0.08em"
              >
                <tspan x="-87" y="0">
                  The most regretful thing
                </tspan>
                <tspan x="-35" y="14">
                  In my life
                </tspan>
                <tspan x="-45" y="28">
                  Was sharing.
                </tspan>
                <tspan x="-53" y="42">
                  But I am stupid.
                </tspan>
                <tspan x="-74" y="56">
                  I still share too much.
                </tspan>
                <tspan x="-111" y="70">
                  If I see there is 0.0001 percent
                </tspan>
                <tspan x="-96" y="84">
                  Of chance that someone will
                </tspan>
                <tspan x="-91" y="98">
                  Listen to, be considerate,
                </tspan>
                <tspan x="-49" y="112">
                  and be honest,
                </tspan>
                <tspan x="-63" y="126">
                  I share and share.
                </tspan>
                <tspan x="-58" y="140">
                  It is a disease.
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal4;
