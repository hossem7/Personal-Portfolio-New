import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';
import { urlFor , client } from '../../client';
import { easeIn, easeInOut, easeOut } from 'popmotion';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  
  return (
    <>
      <br />
      <h2 className="head-text" style={{ fontStyle: 'italic' }}>I know that<span> Good Design</span><br/>means<span> Good Business</span></h2>
      <br />
      <br />
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className = "app__profile-about"
      >
        <div className="app__profile-about-badge">
          <div className="badge-cmp app__flex">
            <div>
              <br />
              <h2 className="head-text">About Me</h2>
              <p className="p-text-about">Hi! I am a passionate programmer who enjoys experimenting with new technologies. Currently I am pursuing a Bachelors in Electrical Engineering and Management at McMaster University. Through my academics, I have garnered strong foundation in object-oriented programming, databases, embedded systems and machine learning in Python, Java, C and C++. I have a clear vision: To break into the realm of software development.
              <br />
              <br />
              Besides my academics, I have expanded my knowledge into the world of full-stack development. For Instance, I used Next JS and React Styled Components to design this personal portfolio website. Check out my projects and technologies section to learn more about my skills in more detail.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'teen' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default About;