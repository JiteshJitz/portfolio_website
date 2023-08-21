import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    Experienced in diverse web technologies, encompassing MERN, Spring Boot, Next.js, Docker, AWS EC2/S3, and CI/CD workflows.    </SectionText>
    <List>

    <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
           
            Java, JavaScript, Kotlin<br />
            C++, Swift, C#, Python.
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
            
            React.js, SpringBoot, Node js, Express js <br />
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
            MongoDB, Firebase, MySQL,
            Docker, AWS EC2 and S3, CI/CD,
            Agile Methodologies, Cypress test and JUnit.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
