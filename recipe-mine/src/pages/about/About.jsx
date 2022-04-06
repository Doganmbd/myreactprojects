import React from "react";

import {
  AboutContainer,
  SvgImage,
  HeaderContainer,
  InfoContainer,
} from "./AboutStyle";

const About = () => {
  return (
    <AboutContainer>
      <SvgImage src="https://picsum.photos/id/180/2400/1600"></SvgImage>
      <HeaderContainer>
        <h1>
          About Front-end Developer <span>M.B.D</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi , I am Mustafa Bilal DOĞAN</h2>
        <h3>
          I am a front-end developer and I am still developing myself in the
          field of IT. This is such a field that it is like the ocean.
        </h3>
        <h3>
          I think I
          will try to improve myself in this field for the rest of my life.
        </h3>

        <h5>
          I know HTML , CSS , JS ,ReactJS , Django , NodeJS , SQL , Python
        </h5>

        <a href="mailto:doganmbdogan@gmail.com">
          <span> Email :</span> doganmbdogan@gmail.com
        </a>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
