import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Stepper from "../../components/Stepper/Stepper";
import { HeaderOffset } from "../../components/Header/styles";
import { SelectionWrapper, Question, BeforeQuestion } from "./styles";

const questions = [
  {
    question: "통장 잔액과 최근 지출 내역을 얼마나 자주 확인하시나요?",
    selection1: "자주 확인하는 편이다.",
    selection2: "가끔 확인한다.",
    selection3: "전혀 확인하지 않는다.",
  },
  {
    question: "세일, 할인카드, 포인트 적립을",
    selection1: "꼼꼼히 챙긴다.",
    selection2: "생각나면 가끔 챙긴다.",
    selection3: "잘 챙기지 않는다.",
  },
  {
    question: "소득과 소비에 대해 기록과 정리를",
    selection1: "꼼꼼히 기록한다.",
    selection2: "정리하진 않지만 대략 알고 있다.",
    selection3: "전혀 기록하지 않는다.",
  },
  {
    question: "충동구매를 하고 후회해 본 일이 있으신가요?",
    selection1: "충동구매를 거의 하지 않는다.",
    selection2: "충동구매를 하고 그때마다 후회한다.",
    selection3: "충동구매를 하지만 후회하지 않는다.",
  },
  {
    question: "카드 할부, 마이너스 통장을 이용해본 경험이 있으신가요?",
    selection1: "둘 다 사용한 적 있다.",
    selection2: "둘 중 하나를 사용한 적 있다.",
    selection3: "둘 다 사용한 적 없다.",
  },
  {
    question: "돈 문제로 어려움을 겪는 미래를 걱정해본 일이 있으신가요?",
    selection1: "걱정하는 편이다.",
    selection2: "'어떻게든 되겠지'라고 생각한다.",
    selection3: "그런 걱정을 해본 일이 없다.",
  },
  {
    question: "나는 투자할 때",
    selection1: "큰 손실도 감수할 수 있다.",
    selection2: "경미한 수준의 손실은 감수할 수 있다.",
    selection3: "수익보다 원금 보존을 우선시한다.",
  },
  {
    question: "투자 가능 기간은 얼마인가요?",
    selection1: "3년 이상",
    selection2: "1년 이상 ~ 3년 미만",
    selection3: "1년 미만",
  },
  {
    question: "고객님의 수입원을 잘 나타내는 것은 어느 것인가요?",
    selection1: "일정한 수입이 있고, 유지/증가 예상",
    selection2: "일정한 수입이 있고, 감소/불안정 예상",
    selection3: "현재 일정한 수입이 없다.",
  },
  {
    question: "고객님의 금융 상품에 대한 지식 수준은 어느 정도인가요?",
    selection1: "상품 설명서를 읽고 특징/위험을 이해",
    selection2: "예금과 펀드의 차이점을 알고 구별",
    selection3: "스스로 투자결정을 해본 적 없다.",
  },
];

const TestPage: React.FC = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 번호
  const [score, setScore] = useState(0); // Q1~Q6 점수만 반영
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(null),
  ); // 질문별 점수 상태

  // 선택지 클릭 시 점수 처리 함수
  const handleSelectionClick = (points: number) => {
    const updatedAnswers = [...answers];

    if (currentQuestionIndex < 6) {
      // Q1~Q6까지만 점수 계산
      if (updatedAnswers[currentQuestionIndex] !== null) {
        setScore(score - updatedAnswers[currentQuestionIndex] + points);
      } else {
        setScore(score + points); // 새로 추가
      }
    }

    updatedAnswers[currentQuestionIndex] = points;
    setAnswers(updatedAnswers);

    // 마지막 질문이면 결과 페이지로 이동
    if (currentQuestionIndex === questions.length - 1) {
      if (score >= 50) {
        navigate(`/result/consumption?result=${3}`); // "마지막에 웃는 진짜 승리자!" 유형
      } else if (score >= 40 && score < 50) {
        navigate(`/result/consumption?result=${2}`); // "나에게 주는 선물" 유형
      } else {
        navigate(`/result/consumption?result=${1}`);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // 이전 질문으로 돌아갈 때 점수 처리
  const handleBeforeClick = () => {
    if (currentQuestionIndex === 0) {
      navigate("/teststart");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "none" }}>
        <HeaderOffset></HeaderOffset>
        <div style={{ padding: "65px 80px" }}>
          <Stepper
            curCount={currentQuestionIndex}
            maxCount={questions.length}
          />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Question>
          <h1>Q{currentQuestionIndex + 1}</h1>
          <p>{questions[currentQuestionIndex].question}</p>
        </Question>
        <SelectionWrapper>
          <button onClick={() => handleSelectionClick(10)}>
            <span>{questions[currentQuestionIndex].selection1}</span>
          </button>
          <button onClick={() => handleSelectionClick(5)}>
            <span>{questions[currentQuestionIndex].selection2}</span>
          </button>
          <button onClick={() => handleSelectionClick(0)}>
            <span>{questions[currentQuestionIndex].selection3}</span>
          </button>
        </SelectionWrapper>
        <BeforeQuestion onClick={handleBeforeClick} />
      </div>
    </div>
  );
};

export default TestPage;
