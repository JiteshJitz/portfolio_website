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
        Graduate student passionate about Software Engineering and AI domain. With more than four and half years of experience working with ML, software, and IOT related personal projects.
        </SectionText>
        <a  href="https://drive.google.com/file/d/1UVC6DVgstI7ZvHp23mk3I_onbFLPXBcI/view?usp=sharing" target="_blank"><Button  >My Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
