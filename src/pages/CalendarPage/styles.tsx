import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f7fa;
  font-family: "Noto Sans KR";
`;

export const CalendarContainer = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  /* width: fit-content; */
  width: 90%;
`;

//---------------------------------------

export const FullCalendarWrapper = styled.div`
  .fc {
    font-family: "Noto Sans KR";

    // 툴바(헤더) 스타일링
    .fc-toolbar {
      padding-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0 !important;

      .fc-toolbar-title {
        font-size: 2rem;
        font-weight: 600;
        color: #374151;
        margin: 0 1rem;
      }

      .fc-button-group {
        .fc-button {
          background: none;
          border: none;
          color: #374151;

          &:hover {
            background-color: #f3f4f6;
          }

          &:focus {
            outline: none;
            box-shadow: none;
          }

          &:disabled {
            opacity: 0.5;
          }
        }
      }

      // 버튼 스타일링
      .fc-prev-button,
      .fc-next-button {
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #374151;

        &:hover {
          background-color: #f3f4f6;
        }

        &:focus {
          outline: none;
          box-shadow: none;
        }
      }
    }

    // 요일 헤더 스타일링
    .fc-col-header {
      .fc-col-header-cell {
        padding: 0.5rem;
        background: white;
        border: 1px solid #e5e7eb;
        height: 20px;

        .fc-col-header-cell-cushion {
          color: #374151;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          padding: 0.5rem;
        }
      }
    }

    // 오늘 날짜 스타일링
    .fc-day-today {
      background-color: white !important;

      .fc-daygrid-day-number {
        background-color: #3b82f6;
        color: white !important;
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
      }
    }

    // 날짜 셀 스타일링
    .fc-daygrid-day {
      height: 30px !important;
      background-color: white;
      border: 1px solid #e5e7eb;

      &:hover {
        background-color: #f9fafb;
      }

      .fc-daygrid-day-top {
        padding: 0.75rem;

        .fc-daygrid-day-number {
          color: #374151;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
        }
      }
    }

    .day-cell-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .progress-event {
      position: relative;
      width: 100%;
      height: 6px; // 프로그레스 바 높이
      background: #e5e7eb; // 배경색
      border-radius: 3px;
      margin: 2px 0;
    }

    .progress-bar {
      position: absolute;
      left: 0;
      height: 100%;
      background: #3b82f6; // 진행률 표시 색상
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    // 이벤트 스타일링
    .fc-event {
      margin: 0 0.75rem;
      border: none;
      background: #f2921d;
      border-radius: 4px;
      font-size: 0.75rem; // 전체 이벤트 텍스트 크기 축소

      .fc-event-main {
        padding: 2px 4px;
        color: white;
        font-size: 0.75rem; // 이벤트 메인 텍스트 크기 축소
      }

      .fc-event-time {
        font-size: 0.7rem; // 시간 텍스트 크기 축소
      }

      .fc-event-title {
        font-size: 0.7rem; // 제목 텍스트 크기 축소
      }
    }

    // 더보기 버튼 스타일링
    .fc-daygrid-more-link {
      color: #374151;
      font-weight: 500;
      font-size: 0.875rem;
      margin: 0 0.75rem;
    }
  }
`;
