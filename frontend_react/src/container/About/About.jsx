import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor , client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const bioQuery = '*[_type == "bio"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
    client.fetch(bioQuery).then((data) => {
      setBio(data);
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
              {bio.map((MyBio) => (
                  <p className="p-text-about">{MyBio.bio}</p>
              ))}
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

export default AppWrap(About, 'about');