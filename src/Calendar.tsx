import React, { FC } from "react";
import cn from "classnames";
import { weekdays, months } from "./constants";
import { Props } from "./types";

const Calendar: FC<Props> = ({
  currentYear,
  currentDate,
  weekDay,
  genitiveMonth,
  nominativeMonth,
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
          {final.map((week: any, i) => {
            console.log("week", week);
            return (
              <tr key={i}>
                {week.map((elem: any) => {
                  const dateClass = cn({
                    "ui-datepicker-today": elem.date === parseInt(currentDate),
                    "ui-datepicker-other-month": elem.isCurrentMonth === false,
                  });
                  return (
                    <td key={elem.date} className={dateClass}>
                      {elem.date}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Calendar };
