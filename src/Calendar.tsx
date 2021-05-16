import React, { FC } from "react";
import { weekdays, months } from "./constants";

interface Props {
  currentYear: string;
  currentDate: string;
  weekDay: string;
  genitiveMonth: string;
  nominativeMonth: string;
  numberOfDays: string;
  datesArray: number[];
  final: number[][];
}

const Calendar: FC<Props> = ({
  currentYear,
  currentDate,
  weekDay,
  genitiveMonth,
  nominativeMonth,
  numberOfDays,
  final,
}) => {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekDay}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDate}</div>
          <div className="ui-datepicker-material-month">{genitiveMonth}</div>
          <div className="ui-datepicker-material-year">{currentYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{nominativeMonth}</span>
          &nbsp;
          <span className="ui-datepicker-year">{currentYear}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {Object.values(weekdays).map(({ short }) => (
              <th key={short} scope="col">
                {short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {final.map((week, i) => {
            return (
              <tr key={i}>
                {week.map((day, i) => {
                  return (
                    <td
                      key={day}
                      className={
                        day === parseInt(currentDate)
                          ? "ui-datepicker-today"
                          : ""
                      }
                    >
                      {day}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {/*<tr>*/}
          {/*  <td className="ui-datepicker-other-month">27</td>*/}
          {/*  <td className="ui-datepicker-other-month">28</td>*/}
          {/*  <td>1</td>*/}
          {/*  <td>2</td>*/}
          {/*  <td>3</td>*/}
          {/*  <td>4</td>*/}
          {/*  <td>5</td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <td>6</td>*/}
          {/*  <td>7</td>*/}
          {/*  <td className="ui-datepicker-today">8</td>*/}
          {/*  <td>9</td>*/}
          {/*  <td>10</td>*/}
          {/*  <td>11</td>*/}
          {/*  <td>12</td>*/}
          {/*</tr>*/}
        </tbody>
      </table>
    </div>
  );
};

export { Calendar };
