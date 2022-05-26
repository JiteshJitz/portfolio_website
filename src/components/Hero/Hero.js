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
        <Button  ><a  href="https://drive.google.com/uc?export=download&id=1LfOrMee1q5vYVCbbAR8VvROcGv0DR2kG" target="_blank">My Resume</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
