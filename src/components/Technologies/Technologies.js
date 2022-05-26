import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with various technologies in the Web Development, AI/ML, IOT and iOS Development.
    </SectionText>
    <List>

    <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
           
            Java, Python, JavaScript, <br />
            C++, Swift, C#.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            
            React.js, Node js, Express js <br />
            Next js, TailwindCSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <ListParagraph>
            SQL and NoSQL Databases, Tensorflow, Keras, Scikit-learn, 
            Docker, AWS, Unity3D,
            Agile Methodologies.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
