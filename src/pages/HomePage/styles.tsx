import React, { useState, useEffect } from "react";
import styled from "styled-components";
import travel from "../../images/travel.svg";
import calendar from "../../images/calendar.svg";

interface GoalContainerProps {
  goal: string;
  startdate: string;
  enddate: string;
  progress: number;
}

export const PageContainer = styled.div`
  padding: 42px 42px 40px;
  display: flex;
  flex-direction: column;
`;

const StyledGoalContainer = styled.div`
  border-radius: 10px;
  background-color: #efefef;
  box-shadow: 4px 4px 14px 1px rgba(0, 0, 0, 0.25);
  font-family:
    Noto Sans KR,
    sans-serif;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-around;
  padding: 30px;
  min-height: 150px;
  font-size: 15px;
  font-weight: 700;
`;

const GoalContainerDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const GoalContainerHeader = styled.div`
  font-family: Noto Sans KR;
  color: rgba(63, 63, 63, 1);
  font-size: 20px;
  font-weight: 600;
`;

const GoalTitle = styled.div`
  justify-content: flex-start;
  align-items: start;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Noto Sans KR;
  color: rgba(63, 63, 63, 1);
  font-size: 42px;
  font-weight: 800;
  padding-top: 10px;
`;

const GoalDate = styled.div`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  padding-left: 2px;
`;

const GoalIcon = styled.img.attrs({ alt: "목표 이미지" })`
  width: 200px;
  height: 200px;
  background-size: cover;
  margin-left: auto;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  height: 24px;
`;

const Progress = styled.div`
  background-color: #008485;
  height: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  transition: width 1.5s ease-in-out;
`;

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

const ProgressPercentage = styled.div`
  font-size: 20px;
  position: absolute;
  right: 0;
  bottom: 100%;
  transform: translateX(50%);
  margin-bottom: 5px;
  transition: right 1.5s ease-in-out;
  white-space: nowrap;
`;

interface GoalContainerProps {
  goal: string;
  startdate: string;
  enddate: string;
  progress: number;
}

export const GoalProgressContainer: React.FC<GoalContainerProps> = ({
  goal,
  startdate,
  enddate,
  progress,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    // 프로그레스바 초기화
    setCurrentProgress(0);
    setDisplayedProgress(0);

    // 약간의 지연 후 애니메이션 시작
    const startDelay = setTimeout(() => {
      setCurrentProgress(progress);

      // 숫자 카운트 업 애니메이션
      const duration = 1500; // 1.5초
      const steps = 60; // 60프레임
      const increment = progress / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const counter = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setDisplayedProgress((prev) => {
            const next = Math.min(
              progress,
              Math.round(increment * currentStep),
            );
            return next;
          });
        } else {
          clearInterval(counter);
        }
      }, stepDuration);

      return () => {
        clearInterval(counter);
      };
    }, 100);

    return () => clearTimeout(startDelay);
  }, [progress]);

  return (
    <StyledGoalContainer>
      <GoalContainerDiv>
        <GoalContainerHeader>짭짤하나 님의 현재 목표</GoalContainerHeader>
        <GoalTitle>{goal}</GoalTitle>
        <GoalDate>
          {startdate} ~ {enddate}
        </GoalDate>
        <ProgressContainer>
          <ProgressPercentage style={{ right: `${100 - currentProgress}%` }}>
            {`${displayedProgress}%`}
          </ProgressPercentage>
          <ProgressBar>
            <Progress style={{ width: `${currentProgress}%` }} />
          </ProgressBar>
        </ProgressContainer>
      </GoalContainerDiv>
      <GoalIcon src={travel} />
    </StyledGoalContainer>
  );
};

const CalendarContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

const CalendarMonthDiv = styled.div`
  flex-direction: column;
`;

const CalendarMonth = styled.div`
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  padding-left: 10px;
`;

const CalendarWeek = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 10px 0;
`;

const CalendarDate = styled.div`
  flex-direction: column;
  padding: 25px;
  font-size: 20px;
  font-weight: 500;
  font-family:
    Noto Sans KR,
    sans-serif;
`;

const CalendarDay = styled.div<{ isActive: boolean }>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 150px;
  border-radius: 8px;
  font-size: 18px;
  color: ${({ isActive }) => (isActive ? "#00bfa5" : "#333")};
  border: ${({ isActive }) => (isActive ? "2px solid #00bfa5" : "none")};
  background-color: ${({ isActive }) => (isActive ? "transparent" : "white")};
  cursor: pointer;
`;

const CalendarIcon = styled.img.attrs({ alt: "달력 이미지" })`
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-right: auto;
  margin: 10px 0 0 15px;
`;

export const Calendar = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const now = new Date();
  let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const activeDay = date.getDay();

  return (
    <CalendarContainer>
      <CalendarMonthDiv>
        <CalendarIcon src={calendar} />
        <CalendarMonth>{`${now.getMonth() + 1}월`}</CalendarMonth>
      </CalendarMonthDiv>
      <CalendarWeek>
        {days.map((day, index) => (
          <CalendarDay key={index} isActive={index === activeDay}>
            <CalendarDate>
              <p style={{ padding: "10px" }}>{day}</p>
              <p style={{ padding: "10px" }}>
                {new Date(
                  date.valueOf() + 86400000 * (index - date.getDay()),
                ).getDate()}
              </p>
            </CalendarDate>
          </CalendarDay>
        ))}
      </CalendarWeek>
    </CalendarContainer>
  );
};
