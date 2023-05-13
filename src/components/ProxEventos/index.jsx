import React, { useState } from 'react';
import './style.css';

const ProxEvent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const generateCalendar = (month, year) => {
    const totalDays = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();
    const weeks = [[]];
    let currentWeek = 0;

    for (let i = 1; i <= totalDays; i++) {
      if (i === 1) {
        for (let j = 0; j < firstDay; j++) {
          weeks[currentWeek].push(null);
        }
      }

      weeks[currentWeek].push(i);

      if (weeks[currentWeek].length === 7 && i < totalDays) {
        weeks.push([]);
        currentWeek++;
      }
    }

    return weeks;
  }

  const handleDayClick = (day, month, year) => {
    setSelectedDate({ day, month, year });
  }

  const renderCalendar = (year) => {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return (
      <>
        <div className="year">
          {months.map((monthName, monthIndex) => (
            <div key={monthIndex} className="month">
              <h2>{monthName}</h2>
              <div className="days-of-week">
                <div>Dom</div>
                <div>Seg</div>
                <div>Ter</div>
                <div>Qua</div>
                <div>Qui</div>
                <div>Sex</div>
                <div>Sáb</div>
              </div>
              <div className="days">
                {generateCalendar(monthIndex, year).map((week, weekIndex) => (
                  <div key={weekIndex} className="week">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`day ${day ? 'active' : 'inactive'} ${selectedDate && selectedDate.day === day && selectedDate.month === monthIndex && selectedDate.year === year ? 'selected' : ''}`}
                        onClick={() => handleDayClick(day, monthIndex, year)}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {renderCalendar(2023)}
    </>
  );
};

export default ProxEvent;
