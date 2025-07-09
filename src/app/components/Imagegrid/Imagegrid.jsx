"use client";
import { useState, useEffect, useRef } from "react";
import "./Imagegrid.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQHJJDznZ8n60w/feedshare-shrink_800/B56ZetFc84HQAk-/0/1750955582223?e=1753920000&v=beta&t=OsKmjfcucAmipyqBm9ALn1DCIAbYqieR8XsEtV4N5oM",
    hoverText: "Smiling just for Linkedin",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQG8O96zJzmqaA/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670780968?e=1753920000&v=beta&t=sAvKDab7gXoIykbwkY32p8bXmfiVRzNEkEMXrWc6F6w",
    hoverText: "Mine is gold too..",
  },
];

const images2 = [
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQG1JCBSDahFig/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670770513?e=1753920000&v=beta&t=ACuNbCQrypKNohZw46gUbfzGh_7yEseZ4BLp8ExfsIA",
    hoverText: "Presting to the IBM pannel",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQH0EmZr23qNOQ/feedshare-shrink_800/B56ZP46wwhG4Ag-/0/1735047993546?e=1753920000&v=beta&t=qmAadq8EBrFjIFbRTjqx-zby68scL_blWIBq7c1894k",
    hoverText: "Did not win anything but photos were important",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D22AQE8LSjgQluLuw/feedshare-shrink_2048_1536/B4DZcwz5ZWGgAo-/0/1748870601774?e=1753920000&v=beta&t=Ki348FGrrAG_TdtrI3Qsn-H6N2mF00kh7wHnDDiUShg",
    hoverText: "posing for photo and waitng for leapord to come",
  },
];

const Imagegrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.from(imageRefs.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".image-grid-section",
        start: "top 85%",
      },
    });
  }, []);

  const handlePointerMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
  };

  const handlePointerLeave = () => {
    setHoveredIndex(null);
  };

  const renderImageGrid = (imgs, startIndex = 0) => (
    <section className="image-grid-section">
      <div className="image-grid">
        {imgs.map((item, index) => {
          const currentIndex = startIndex + index;
          return (
            <div
              key={currentIndex}
              className="image-frame"
              ref={(el) => (imageRefs.current[currentIndex] = el)}
              onPointerMove={(e) => handlePointerMove(e, currentIndex)}
              onPointerLeave={handlePointerLeave}
            >
              <img
                src={item.src}
                alt={`Project ${index + 1}`}
                className="gallery-img"
              />
              {hoveredIndex === currentIndex && (
                <div
                  className="hover-circle"
                  style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span>{item.hoverText}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      {renderImageGrid(images, 0)}
      {renderImageGrid(images2, images.length)}
    </>
  );
};

export default Imagegrid;
