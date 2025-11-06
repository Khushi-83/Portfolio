import React from "react";
import styled from "styled-components";

// ---------- Timeline Styles ----------
const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background-color: ${({ theme }) => theme.text_secondary};
  transform: translateX(-50%);
  z-index: 0;
`;

const TimelineItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${({ side }) => (side === "left" ? "flex-end" : "flex-start")};
  margin: 40px 0;
`;

const TimelineContent = styled.div`
  width: 45%;
  z-index: 2;
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const IconImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  display: block;
`;

// ---------- Experience Card Styles ----------
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 20px;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 10px;
`;

const Role = styled.h3`
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  font-weight: 600;
`;

const Company = styled.h4`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  font-weight: 500;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const SkillTag = styled.span`
  background: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
`;

// ---------- Components ----------
const ExperienceCard = ({ experience = {} }) => {
  const { img, company, role, date, desc, skills } = experience || {};

  return (
    <Card>
      <TopSection>
        {img && <Img src={img} alt={company || "Company"} />}
        <div>
          {role && <Role>{role}</Role>}
          {company && <Company>{company}</Company>}
          {date && <Date>{date}</Date>}
        </div>
      </TopSection>

      {desc && <Desc>{desc}</Desc>}

      {Array.isArray(skills) && skills.length > 0 && (
        <Skills>
          {skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Skills>
      )}
    </Card>
  );
};

// ---------- Example Timeline Section ----------
const ExperienceSection = ({ experiences }) => {
  return (
    <TimelineContainer>
      <TimelineLine />
      {experiences.map((exp, index) => (
        <TimelineItem key={index} side={index % 2 === 0 ? "left" : "right"}>
          <TimelineContent>
            <ExperienceCard experience={exp} />
          </TimelineContent>
          <TimelineIcon>
            <IconImage src={exp.img} alt={exp.company || "Company Logo"} />
          </TimelineIcon>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default ExperienceSection;
