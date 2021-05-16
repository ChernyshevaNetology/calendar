import React, { FC } from "react";
import "./App.css";
import { Calendar } from "./Calendar";
import { lastDayOfMonth, startOfMonth, format, sub } from "date-fns";
import { ru } from "date-fns/locale";
import { DatesArray } from "./types";

const now = new Date(2021, 1, 16);

const currentYear = format(new Date(now), "y");
const genitiveMonth = format(new Date(now), "MMMM", { locale: ru });
let nominativeMonth = format(new Date(now), "LLLL", { locale: ru });
const weekDay = format(new Date(now), "eeee", { locale: ru });
const weekDayNumber = format(new Date(now), "i");
const currentDate = format(new Date(now), "d");
const numberOfDays = format(lastDayOfMonth(new Date(now)), "d");

// getting last day of the month and number of days in prev month
const numberOfDaysMonthPrev = sub(new Date(now), { months: 1 });
const lastDayMonthPrev = format(lastDayOfMonth(numberOfDaysMonthPrev), "d");

// Getting the weekday for start of month
const weekDayStart = startOfMonth(now);
const weekDayStartNum = parseInt(format(new Date(weekDayStart), "i")) - 1;

const datesArray = [...new Array(parseInt(numberOfDays) + 1).keys()]
  .slice(1)
  .reduce(
    (acc: any, date) => [...acc, { date: date, isCurrentMonth: true }],
    []
  );

const prevDates = [...new Array(parseInt(lastDayMonthPrev) + 1).keys()]
  .slice(1)
  .splice(-weekDayStartNum)
  .reduce(
    (acc: any, date: any) => [...acc, { date: date, isCurrentMonth: false }],
    []
  );

const nextMonthDates = [...new Array(10).keys()]
  .slice(1)
  .reduce(
    (acc: any, date) => [...acc, { date: date, isCurrentMonth: false }],
    []
  );

const getAllDates = (prev: any, current: any, next: any) => {
  if (weekDayStartNum === 0) {
    return [...current, ...next];
  } else {
    return [...prev, ...current, ...next];
  }
};

const datesToRender = getAllDates(prevDates, datesArray, nextMonthDates);
console.log("datesToRender", datesToRender);

const final: DatesArray[] = [];

for (let i = 0; i < datesToRender.length; i++) {
  // @ts-ignore
  final.push(datesToRender.splice(0, 7));
}

const App: FC = () => {
  return (
    <Calendar
      currentYear={currentYear}
      currentDate={currentDate}
      weekDay={weekDay}
      genitiveMonth={genitiveMonth}
      nominativeMonth={nominativeMonth}
      final={final}
    />
  );
};

export default App;
