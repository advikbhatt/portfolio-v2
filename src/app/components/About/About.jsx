// About.jsx
"use client";
import React from "react";
import "./About.css";

const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQHJJDznZ8n60w/feedshare-shrink_800/B56ZetFc84HQAk-/0/1750955582223?e=1753920000&v=beta&t=OsKmjfcucAmipyqBm9ALn1DCIAbYqieR8XsEtV4N5oM",
    "https://media.licdn.com/dms/image/v2/D5622AQG8O96zJzmqaA/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670780968?e=1753920000&v=beta&t=sAvKDab7gXoIykbwkY32p8bXmfiVRzNEkEMXrWc6F6w",
];
const images2 = [
    'https://media.licdn.com/dms/image/v2/D5622AQG1JCBSDahFig/feedshare-shrink_1280/feedshare-shrink_1280/0/1729670770513?e=1753920000&v=beta&t=ACuNbCQrypKNohZw46gUbfzGh_7yEseZ4BLp8ExfsIA',
'https://media.licdn.com/dms/image/v2/D5622AQH0EmZr23qNOQ/feedshare-shrink_800/B56ZP46wwhG4Ag-/0/1735047993546?e=1753920000&v=beta&t=qmAadq8EBrFjIFbRTjqx-zby68scL_blWIBq7c1894k',
'https://media.licdn.com/dms/image/v2/D4D22AQE8LSjgQluLuw/feedshare-shrink_2048_1536/B4DZcwz5ZWGgAo-/0/1748870601774?e=1753920000&v=beta&t=Ki348FGrrAG_TdtrI3Qsn-H6N2mF00kh7wHnDDiUShg',

];
const About = () => {
    return (
        <section className="about-wrapper">
            {/* Banner Heading */}
            <div className="miranda-banner">
                <h1 className="miranda-text">EXPERIENCE</h1>
            </div>

            {/* Clients & Collaborations */}
            <div className="clients-block">
                <p className="clients-text">
                    Over the past 2+ years, I’ve worked with impactful organizations like
                    <span className="highlight"> BHOMYA</span>,
                    <span className="highlight"> INNODATA</span>,
                    <span className="highlight"> CODSOFT</span>,
                    contributing to digital solutions, research, and social-tech development.
                </p>
            </div>

            {/* Experience Summary */}
            <div className="experience-grid">
                <a
  href="https://www.bhomya.org"
  target="_blank"
  rel="noopener noreferrer"
  className="exp-card hoverable"
>
  <h3>Technical Intern</h3>
  <p className="exp-time">April 2025 – June 2025</p>

  <div className="exp-card hoverable">
    <h3>Bhomya Foundation (NGO)</h3>
    <p className="exp-time">Dehradun, India</p>
    <p>
      Designed and developed the official website using React.js, incorporating dynamic content and smooth animations. Analyzed
      participation and outreach data from events using Python to uncover engagement insights and inform volunteer planning.
    </p>
    <div className="tags">
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >REACT DEVELOPMENT</a>,
      <a
        href="https://www.coursera.org/articles/data-analysis"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >DATA ANALYSIS</a>,
      <a
        href="https://www.figma.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >WEB UI DESIGN</a>,
      <a
        href="https://pandas.pydata.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >PANDAS (PYTHON)</a>,
      <a
        href="/assets/Bhomya_Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="highlight"
      >CERTIFICATE</a>
    </div>
  </div>
</a>

                <a
                    href="https://www.mponline.gov.in/portal/services/forest/kuno.aspx" // Replace with Kuno project page if available
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card hoverable"
                >
                    <h3>Research Intern</h3>
                    <p className="exp-time">Dec 2023 – Jan 2024</p>

                    <div className="exp-card hoverable">
                        <h3> Kuno National Park</h3>
                        <p className="exp-time">Madhya Pradesh, India</p>
                        <p>
                            Contributed to wildlife conservation research by conducting field-level data collection and ecological
                            monitoring in the Kuno National Park region. Learned practical skills in biodiversity surveying, data
                            logging, and sustainable field methodologies.
                        </p>
                        <div className="tags">
                            <a href="https://en.wikipedia.org/wiki/Biodiversity_monitoring" target="_blank" rel="noopener noreferrer" className="highlight">FIELD DATA COLLECTION</a>,
                            <a href="https://www.gbif.org/data" target="_blank" rel="noopener noreferrer" className="highlight">ECOLOGICAL DATA</a>,
                            <a href="https://earthobservatory.nasa.gov/features/RemoteSensing" target="_blank" rel="noopener noreferrer" className="highlight">REMOTE SENSING</a>,
                            <a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" rel="noopener noreferrer" className="highlight">GIS MAPPING</a>,
                            <a href="/assets/Kuno_Certificate.pdf" target="_blank" rel="noopener noreferrer" className="highlight">CERTIFICATE</a>
                        </div>
                    </div>
                </a>
                <a
                    href="https://www.enigmatechsolutions.com/" // Replace with the exact page if available
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card hoverable"
                >
                    <h3>Developer Intern </h3>
                    <p className="exp-time">Jan 2024 – Apr 2024</p>

                    <div className="exp-card hoverable">
                        <h3>Enigma Tech Solution</h3>
                        <p className="exp-time">Noida, Uttar Pradesh</p>
                        <p>
                            Worked on full-stack modules involving frontend development, backend integration,
                            and performance optimization. Contributed to real-world scalable projects in a collaborative environment.
                        </p>
                        <div className="tags">
                            <a href="https://github.com/advikbhatt?tab=repositories&q=data+science" target="_blank" rel="noopener noreferrer" className="highlight">DATA SCIENCE</a>,
                            <a href="https://github.com/advikbhatt?tab=repositories&q=power+bi" target="_blank" rel="noopener noreferrer" className="highlight">POWER BI</a>,
                            <a href="https://www.behance.net/search/projects?search=ui%2Fux%20advik%20bhatt" target="_blank" rel="noopener noreferrer" className="highlight">UI/UX DESIGN</a>,
                            <a href="https://github.com/advikbhatt?tab=repositories&q=react" target="_blank" rel="noopener noreferrer" className="highlight">REACT</a>
                        </div>


                    </div>
                </a>


                <a
                    href=""  
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card hoverable"
                >
                    <h3>Social Intern </h3>
                    <p className="exp-time">May 2023 – Jul 2023</p>

                    <div className="exp-card hoverable">
                        <h3>Unforgotten Humanity Foundation</h3>
                        <p className="exp-time">Dehradun, Uttrakahnd</p>
                        <p>
                            Organized social outreach programs in Dehradun including dance and singing sessions
                            for underprivileged children. Helped raise sponsorships from various local organizations
                            to support community initiatives and creative education drives.
                        </p>

                        <div className="tags">
                            <a href="https://github.com/advikbhatt?tab=repositories&q=full-stack" target="_blank" rel="noopener noreferrer" className="highlight">FULL-STACK</a>,
                            <a href="https://github.com/advikbhatt?tab=repositories&q=data+science" target="_blank" rel="noopener noreferrer" className="highlight">DATA SCIENCE</a>,
                            <a href="https://github.com/advikbhatt?tab=repositories&q=power+bi" target="_blank" rel="noopener noreferrer" className="highlight">POWER BI</a>,
                            <a href="https://www.behance.net/search/projects?search=ui%2Fux%20advik%20bhatt" target="_blank" rel="noopener noreferrer" className="highlight">UI/UX DESIGN</a>,
                            <a href="https://github.com/advikbhatt?tab=repositories&q=react" target="_blank" rel="noopener noreferrer" className="highlight">REACT</a>
                        </div>


                    </div>
                </a>





            </div>

            {/* Image Grid Section */}
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
            </section>            <section className="image-grid-section">
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
        </section>
    );
};

export default About;
