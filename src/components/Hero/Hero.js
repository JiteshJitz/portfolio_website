import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        
    
        <SectionTitle main center>
          Hello, <br />
          I am Jitesh
        </SectionTitle>
        <SectionText>
        Full-Stack Developer with expertise in MERN, Spring Boot, and mobile applications. Committed to delivering secure, innovative and scalable software solutions.
        </SectionText>
        <a  href="https://drive.google.com/file/d/12QTfOyrf1gKFaE6V2HxWrs11u3IFeIY0/view?usp=drive_link" target="_blank"><Button  >My Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
