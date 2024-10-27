// import React, { useState, useEffect } from "react";
// import * as styled from "./styles";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";
// import interactionPlugin from "@fullcalendar/interaction";

// const Calendar: React.FC = () => {
// 	const apiKey = process.env.REACT_APP_CAL_API_KEY;
// 	const calendarRef = React.useRef<FullCalendar>(null);

// 	return (
// 		<styled.CalendarContainer>
// 			<styled.FullCalendarWrapper>
// 				<FullCalendar
// 					ref={calendarRef}
// 					plugins={[
// 						dayGridPlugin,
// 						googleCalendarPlugin,
// 						interactionPlugin,
// 					]}
// 					initialView="dayGridMonth"
// 					height={800}
// 					showNonCurrentDates={false} // 이전/다음 달 날짜 숨기기
// 					fixedWeekCount={false}
// 					googleCalendarApiKey={apiKey}
// 					events={{
// 						googleCalendarId: "hyuktae.choi@gmail.com",
// 						className: "gcal-event",
// 					}}
// 					headerToolbar={{
// 						left: "prev",
// 						center: "title",
// 						right: "next",
// 					}}
// 					titleFormat={{ year: "numeric", month: "2-digit" }}
// 					locale="ko"
// 					eventDisplay="block"
// 					eventTextColor="#FFF"
// 					eventColor="#008485"
// 					dayMaxEvents={2} // 최대 이벤트 표시 개수 제한
// 					moreLinkContent={(args) => `+${args.num}개 더보기`}
// 					eventTimeFormat={{
// 						hour: "2-digit",
// 						minute: "2-digit",
// 						meridiem: false,
// 						hour12: false,
// 					}}
// 					buttonText={{
// 						today: "오늘",
// 						month: "월",
// 						week: "주",
// 						day: "일",
// 						list: "목록",
// 					}}
// 					dayCellContent={(args) => {
// 						return args.dayNumberText.replace("일", "");
// 					}}
// 				/>
// 			</styled.FullCalendarWrapper>
// 		</styled.CalendarContainer>
// 	);
// };

// export default Calendar;

import React, { useState, useEffect } from "react";
import * as styled from "./styles";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import { DayCellContentArg } from "@fullcalendar/core";

interface Goal {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  color: string;
}

const Calendar: React.FC = () => {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;
  const calendarRef = React.useRef<FullCalendar>(null);

  const goals: Goal[] = [
    {
      id: 1,
      title: "프로젝트 완성",
      startDate: "2024-10-15",
      endDate: "2024-10-25",
      color: "#3b82f6",
    },
  ];

  const renderProgressBar = (info: DayCellContentArg) => {
    const date = info.date;
    const dateStr = date.toISOString().split("T")[0];

    const activeGoals = goals.filter((goal) => {
      return dateStr >= goal.startDate && dateStr <= goal.endDate;
    });

    if (activeGoals.length === 0) return null;

    return activeGoals.map((goal) => {
      const totalDays =
        (new Date(goal.endDate).getTime() -
          new Date(goal.startDate).getTime()) /
        (1000 * 3600 * 24);
      const progressDays =
        (new Date(dateStr).getTime() - new Date(goal.startDate).getTime()) /
        (1000 * 3600 * 24);
      const progress = Math.min(
        Math.max((progressDays / totalDays) * 100, 0),
        100,
      );

      return (
        <div key={goal.id} className="progress-event">
          <div
            className="progress-bar"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      );
    });
  };

  return (
    <styled.CalendarContainer>
      <styled.FullCalendarWrapper>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height={800}
          showNonCurrentDates={false}
          fixedWeekCount={false}
          googleCalendarApiKey={apiKey}
          events={{
            googleCalendarId: "hyuktae.choi@gmail.com",
            className: "gcal-event",
          }}
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          titleFormat={{ year: "numeric", month: "2-digit" }}
          locale="ko"
          eventDisplay="block"
          eventTextColor="#FFF"
          eventColor="#008485"
          dayMaxEvents={2}
          moreLinkContent={(args) => `+${args.num}개 더보기`}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
            hour12: false,
          }}
          buttonText={{
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            list: "목록",
          }}
          dayCellContent={(args: DayCellContentArg) => {
            const dayNumber = args.dayNumberText.replace("일", "");
            return (
              <div style={{ height: "100%", position: "relative" }}>
                <div>{dayNumber}</div>
                {renderProgressBar(args)}
              </div>
            );
          }}
        />
      </styled.FullCalendarWrapper>
    </styled.CalendarContainer>
  );
};

export default Calendar;
