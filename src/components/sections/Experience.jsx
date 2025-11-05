import React from "react";
import styled from "styled-components";
import { experience } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>My experiences in the professional world.</Desc>

        <VerticalTimeline>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.1)" }}
              date={exp.date}
              iconStyle={{
                background: exp.iconBg || "#232631",
                color: "#fff",
              }}
              icon={
                <img
                  src={exp.icon}
                  alt={exp.company}
                  style={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
              }
            >
              <ExperienceCard experience={exp} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
