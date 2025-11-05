import React from "react";
import styled from "styled-components";

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

const ExperienceCard = ({ experience = {} }) => {
  return (
    <Card>
      <TopSection>
        {experience.img && (
          <Img src={experience.img} alt={experience.company || "Company"} />
        )}
        <div>
          <Role>{experience.role || "Role"}</Role>
          <Company>{experience.company || "Company"}</Company>
          <Date>{experience.date || ""}</Date>
        </div>
      </TopSection>
      {experience.desc && <Desc>{experience.desc}</Desc>}
      {Array.isArray(experience.skills) && experience.skills.length > 0 && (
        <Skills>
          {experience.skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </Skills>
      )}
    </Card>
  );
};

export default ExperienceCard;
