import React, { useState, useEffect, useRef } from "react";
import * as styled from "./ChatModalStyles";
import icon from "../../images/chatmodal_counsel.png";
import closeIcon from "../../images/chatmodal_exit.png";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 미리 준비된 답변 데이터
const predefinedResponses: { [key: string]: string } = {
  트레블로그:
    "트레블로그 여행 적금은 연 4.50%~6.00%의 이율을 제공하며 5년 동안 유지됩니다.",
  달달하나:
    "달달 하나 적금은 2백만원까지 혜택을 받을 수 있으며, 기본 0.10%~최고 3.00%의 이율이 적용됩니다.",
  하나적금:
    "하나 청년도약 계좌는 가입기간은 5년이고, 가입금액 1천원 이상 ~ 70만원 이하(천원 단위)입니다.",
};

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; timestamp: string }[]
  >([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isClosing, setIsClosing] = useState(false); // 모달 닫기 애니메이션 상태

  // 스크롤을 관리하기 위한 Ref
  const chatAreaRef = useRef<HTMLDivElement>(null);

  // 메시지 전송 핸들러
  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }); // 시와 분까지만 표시
      const newMessages = [
        ...messages,
        { text: currentMessage, isUser: true, timestamp: currentTime },
      ];
      setMessages(newMessages);
      setCurrentMessage("");

      // 미리 준비된 답변이 있는지 확인
      let responseFound = false;
      for (const key in predefinedResponses) {
        if (currentMessage.includes(key)) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: predefinedResponses[key],
              isUser: false,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
          responseFound = true;
          break;
        }
      }

      if (!responseFound) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "죄송합니다, 해당 상품에 대한 정보를 찾을 수 없습니다.",
            isUser: false,
            timestamp: currentTime,
          },
        ]);
      }
    }
  };

  // 엔터키로 메시지 전송 핸들러
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // 새로운 메시지가 추가되면 자동으로 스크롤을 가장 아래로 이동
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // 모달 닫기
  const handleCloseModal = () => {
    setIsClosing(true); // 닫기 애니메이션 실행
    setTimeout(() => {
      onClose(); // 애니메이션 후 모달 닫기
      setIsClosing(false); // 애니메이션 리셋
    }, 300); // 애니메이션 지속 시간과 동일하게 설정
  };

  if (!isOpen) return null;

  return (
    <styled.ModalOverlay>
      <styled.ModalContent closing={isClosing}>
        {/* 헤더 부분 */}
        <styled.Header>
          <styled.ChatIcon src={icon} />
          <styled.CloseImg src={closeIcon} onClick={handleCloseModal} />
        </styled.Header>

        {/* 채팅 부분 */}
        <styled.ChatArea ref={chatAreaRef}>
          {messages.length === 0 ? (
            <styled.Message isUser={false}>
              <p>상품에 대해서 궁금하신 부분이 있으신가요?</p>
            </styled.Message>
          ) : (
            messages.map((msg, index) => (
              <styled.MessageWrapper key={index} isUser={msg.isUser}>
                <styled.Message isUser={msg.isUser}>{msg.text}</styled.Message>
                <styled.Timestamp isUser={msg.isUser}>
                  {msg.timestamp}
                </styled.Timestamp>
              </styled.MessageWrapper>
            ))
          )}
        </styled.ChatArea>

        {/* 채팅 입력 부분 */}
        <styled.ChatInput>
          <input
            type="text"
            placeholder="메시지를 입력하세요"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>전송</button>
        </styled.ChatInput>
      </styled.ModalContent>
    </styled.ModalOverlay>
  );
};

export default ChatModal;
