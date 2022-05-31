import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/m-hossein/' target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
        </div>
        <div>
            <a href='https://github.com/hossem7' target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
        </div>
        <div>
            <a href='https://www.instagram.com/mohammad_h6501/' target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia