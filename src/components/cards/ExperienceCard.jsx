import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
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

const Desc = styled.p`
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  margin-top: 8px;
  line-height: 1.5;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Role>{experience.title}</Role>
      <Company>{experience.company}</Company>
      <Desc>{experience.description}</Desc>
    </Card>
  );
};

export default ExperienceCard;
