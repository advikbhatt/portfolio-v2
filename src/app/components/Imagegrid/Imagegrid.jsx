// About.jsx
"use client";
import React from "react";
import "./Imagegrid.css";

const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQHJJDznZ8n60w/feedshare-shrink_800/B56ZetFc84HQAk-/0/1750955582223?e=1753920000&v=beta&t=OsKmjfcucAmipyqBm9ALn1DCIAbYqieR8XsEtV4N5oM",
    "https://media.licdn.com/dms/image/v2/D5622AQG8O96zJzmqaA/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670780968?e=1753920000&v=beta&t=sAvKDab7gXoIykbwkY32p8bXmfiVRzNEkEMXrWc6F6w",
];

const images2 = [
    "https://media.licdn.com/dms/image/v2/D5622AQG1JCBSDahFig/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670770513?e=1753920000&v=beta&t=ACuNbCQrypKNohZw46gUbfzGh_7yEseZ4BLp8ExfsIA",
    "https://media.licdn.com/dms/image/v2/D5622AQH0EmZr23qNOQ/feedshare-shrink_800/B56ZP46wwhG4Ag-/0/1735047993546?e=1753920000&v=beta&t=qmAadq8EBrFjIFbRTjqx-zby68scL_blWIBq7c1894k",
    "https://media.licdn.com/dms/image/v2/D4D22AQE8LSjgQluLuw/feedshare-shrink_2048_1536/B4DZcwz5ZWGgAo-/0/1748870601774?e=1753920000&v=beta&t=Ki348FGrrAG_TdtrI3Qsn-H6N2mF00kh7wHnDDiUShg",
];

const Imagegrid = () => {
    return (
        <>
            {/* First Image Grid */}
            <section className="image-grid-section">
                <div className="image-grid">
                    {images.map((src, index) => (
                        <div key={index} className="image-frame">
                            <img
                                src={src}
                                alt={`Project Screenshot ${index + 1}`}
                                className="gallery-img"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Second Image Grid */}
            <section className="image-grid-section">
                <div className="image-grid">
                    {images2.map((src, index) => (
                        <div key={index} className="image-frame">
                            <img
                                src={src}
                                alt={`Project Screenshot ${index + 1}`}
                                className="gallery-img"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Imagegrid;
